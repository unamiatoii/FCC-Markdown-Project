const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

function updatePreview() {
  const markdown = editor.value;
  const html = marked(markdown);
  preview.innerHTML = html;
}

editor.addEventListener('input', updatePreview);

const defaultMarkdown = `# Heading 1
## Heading 2
[Link](https://www.example.com)
\`inline code\`
\`\`\`
// Code block
function greet() {
  console.log('Hello, world!');
}
\`\`\`
- List item 1
- List item 2
> Blockquote
![Image](https://www.example.com/image.jpg)
**Bold text**`;

editor.value = defaultMarkdown;
updatePreview();
