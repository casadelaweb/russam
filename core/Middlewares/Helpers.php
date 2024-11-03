<?php

namespace Middlewares;

class Helpers {
  static public function getFilePathWithHash(string $path): string {
    $timestamp = filemtime($_SERVER['DOCUMENT_ROOT'] . $path);
    return $path . '?v=' . $timestamp;
  }
}

