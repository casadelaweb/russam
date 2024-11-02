import fs from 'fs'
import path from 'path'

export function getHtmlContentSync(filePath: string): string {
  try {
    const absolutePath = path.resolve(filePath)
    //console.log(absolutePath)
    return fs.readFileSync(absolutePath, 'utf-8')
  } catch (error) {
    throw new Error(`Ошибка при чтении файла: ${ error.message }`)
  }
}

export function processImports(html: string) {
  const imports = findImports(html)
  imports.forEach((path: string) => {
    getHtmlContentSync(path)
    //console.log(path)
  })
}

export function findImports(html: string): string[] {
  const importPattern = /@import\(['"]([^'"]+)['"]\)/g
  const matches = []
  let match

  while ((match = importPattern.exec(html)) !== null) {
    matches.push(match[1])
  }
  //console.log(matches)
  return matches
}

/**
 * Рекурсивно заменяет конструкции @import('ПУТЬ_К_ФАЙЛУ_HTML') на содержимое файлов.
 * @param filePath - Путь к основному HTML файлу
 * @returns Содержимое HTML файла с заменёнными @import конструкциями
 */
export function replaceImports(filePath: string): string {
  const absolutePath = path.resolve(filePath)
  let content = fs.readFileSync(absolutePath, 'utf-8')

  // Регулярное выражение для поиска конструкций @import('ПУТЬ_К_ФАЙЛУ_HTML')
  const importPattern = /@import\(['"](.+?)['"]\)/g

  content = content.replace(importPattern, (match, importPath) => {
    const importFilePath = path.resolve(path.dirname(absolutePath), importPath)

    // Рекурсивно читаем и обрабатываем содержимое файла, указанного в @import
    try {
      return replaceImports(importFilePath)
    } catch (error) {
      console.error(`Ошибка при чтении файла ${ importFilePath }: ${ error.message }`)
      return ''
    }
  })

  return content
}

export function replaceImportsInContent(htmlContent: string, baseDir: string): string {
  const importPattern = /@import\(['"](.+?)['"]\)/g

  htmlContent = htmlContent.replace(importPattern, (match, importPath) => {
    const importFilePath = path.resolve(baseDir, importPath)

    // Рекурсивно читаем и обрабатываем содержимое файла, указанного в @import
    try {
      const importedContent = fs.readFileSync(importFilePath, 'utf-8')
      return replaceImportsInContent(importedContent, path.dirname(importFilePath))
    } catch (error) {
      console.error(`Ошибка при чтении файла ${ importFilePath }: ${ error.message }`)
      return ''
    }
  })

  return htmlContent
}

export function replaceImportsWithVariables(htmlContent: string, baseDir: string = path.resolve('src/views')): string {
  const importPattern = /@import\(['"](.+?)['"],\s*({[\s\S]*?})\)/g

  htmlContent = htmlContent.replace(importPattern, (match, importPath, paramsString) => {
    // Убираем `src/views/` из пути, чтобы получить относительный путь
    const relativePath = importPath.replace(/^src\/views\//, '')
    // Создаем полный путь к файлу импорта
    const importFilePath = path.join(baseDir, relativePath)

    // Убираем переносы строк, чтобы избежать ошибок с JSON
    paramsString = paramsString.replace(/(\r\n|\n|\r)/gm, '')
    const params = paramsString ? JSON.parse(paramsString.replace(/(\w+):/g, '"$1":')) : {}

    try {
      // Чтение и рекурсивная обработка содержимого импортируемого файла
      let importedContent = fs.readFileSync(importFilePath, 'utf-8')
      importedContent = replaceImportsWithVariables(importedContent, baseDir) // Передаем тот же базовый путь

      // Замена переменных на значения из params
      return replaceVariables(importedContent, params)
    } catch (error) {
      console.error(`Ошибка при чтении файла ${ importFilePath }: ${ error.message }`)
      return ''
    }
  })

  return htmlContent
}

// Экспорт функции для замены переменных в HTML содержимом
export function replaceVariables(content: string, variables: Record<string, any>): string {
  return content.replace(/{{\s*(\w+)\s*}}/g, (match, variable) => {
    return variables[variable] !== undefined ? variables[variable] : match
  })
}

