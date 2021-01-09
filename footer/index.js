module.exports = function(opt){
	/* opt (options) would be from the options page...
		{
			text: "hello world!"
			etc: "etc. etc. etc..."
		}
		css will be placed in the head
		js will be placed before the closing body tag
	*/
	const scope = "x" + Math.random().toString(36).substr(2, 6);
	return {
		css: `
			.${scope}-footer{
				max-width: ${opt.width}px;
			}
		`,
		html: `
			<footer class="${scope}-footer">
				<p>Hello world!</p>
				<p>${opt.text} ${opt.showYear ? `<span id="${scope}-year"></span>` : ""}</p>
			</footer>
		`,
		js: `
			console.log("hello world!");
			${opt.showYear ? `document.getElementById("${scope}-year").textContent = new Date().getFullYear();` : ""}
		`
}