import { RuleSetRule } from "node_modules/webpack";

function ruleVideos(): RuleSetRule {
  return {
    test: /(mp4|MOV|WEBM)$/i,
    type: "asset/resource",
    generator: {
      filename: (pathData: { filename: any }) => {
        const { filename } = pathData;
        let result = filename;
        const queries = [
          {
            searchFor: "src/assets/",
            replaceWith: "",
          },
          {
            searchFor: "src/modules/",
            replaceWith: "video/",
          },
          {
            searchFor: "src/components/",
            replaceWith: "video/",
          },
        ];
        queries.forEach((query) => {
          result = result.replace(query.searchFor, query.replaceWith);
        });
        return result;
      },
    },
  };
}

export default ruleVideos;
