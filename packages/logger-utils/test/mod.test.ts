import { assertEquals, describe, it } from "../../../test_deps.ts";

import { LoggerUtils } from "../mod.ts";
import * as fmt from "@std/fmt/colors";
import { FileUtils } from "../../../mod.ts";

describe({
  name: "LoggerUtils",
  sanitizeResources: false,
  sanitizeOps: false,
  fn: () => {
    it("#getLogger()", async function () {
      LoggerUtils.defineFileHandler("my-file-handler", "./my-file-handler.txt");
      const logger = LoggerUtils.defineLogger("test", "DEBUG", [
        "console",
        "my-file-handler"
      ]);
      logger.info(
        fmt.bgRgb24(fmt.rgb24("Hello, World!", { r: 0, g: 0, b: 0 }), {
          r: 255,
          g: 138,
          b: 101
        })
      );
      assertEquals(FileUtils.existsSync("./my-file-handler.txt"), true);
      FileUtils.removeSync("./my-file-handler.txt");
    });
  }
});
