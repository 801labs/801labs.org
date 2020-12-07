import remark from "remark"
import images from "../plugins/remark/images"
import html from "remark-html"
import unwrapImages from "remark-unwrap-images"

export async function markdownToHtml(markdown) {
    const result = await remark().use(unwrapImages).use(images).use(html).process(markdown)
    return result.toString()
}