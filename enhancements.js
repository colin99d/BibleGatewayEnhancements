function zenMode() {
	const navigationLink = document.querySelector("nav");
	const mainContent = document.querySelector("div.page-col");
	const resourcesTab = document.querySelector("div.resources");
	const stickyFooter = document.querySelector("div.fs-sticky-footer");
	const topBar = document.querySelector("div.top-bar");
	const topWrapper = document.querySelector("div.top-wrapper");
	const bblSize = document.querySelector("div.bbl-fontsize");
	const copywriteTable = document.querySelector("div.copyright-table");
	const contentDividers = document.querySelectorAll("hr.content-divider");
	const passageTools = document.querySelectorAll("div.passage-tools");
	const passageHeaders = document.querySelectorAll("h1.passage-display");
	const passageColumns = document.querySelectorAll("div.passage-col");
	const passageTexts = document.querySelectorAll("div.passage-text");
	const closeIcons = document.querySelectorAll("div.close-translation");
	const innerContent = document.querySelector("section.content");

	const toHides = [
		navigationLink,
		resourcesTab,
		stickyFooter,
		topWrapper,
		bblSize,
		copywriteTable,
		topBar,
		...passageTools,
		...contentDividers,
		...passageHeaders,
		...closeIcons,
	];

	toHides.forEach((element) => {
		if (element && element.style) {
			element.style.display = "none";
		}
	});
	mainContent.style.marginLeft = "0px";
	innerContent.style.paddingLeft = "8px";
	innerContent.style.paddingRight = "8px";

	passageColumns.forEach((column) => {
		column.style.paddingTop = "8px";
		column.style.paddingLeft = "8px";
		column.style.paddingRight = "8px";
	});
	passageTexts.forEach((text) => {
		text.style.marginTop = "8px";
	});
}

function flattenChildNodes(nodes) {
    let flatList = [];

    nodes.forEach(node => {
        // Only add the node if it has no child nodes (it's a leaf node)
        if (!node.childNodes.length) {
            flatList.push(node);
        } else {
            // If the current node has child nodes, recurse into them without adding the current node
            flatList = flatList.concat(flattenChildNodes(Array.from(node.childNodes)));
        }
    });
    return flatList;
}


function lineByLine(value) {
	const contents = document.querySelectorAll("div.passage-content");
	const results = Array.from(contents).map(({ _ }) => {
		return {};
	});
	contents.forEach((item, i) => {
		const inner = item.childNodes[0];
		inner.childNodes.forEach((child) => {
			if (
				!(child.classNames && child.classNames.includes("crossrefs")) &&
				!(child.classNames && child.classNames.includes("footnotes")) &&
				child.tagName &&
				child.tagName != "H3"
			) {
				const nodes = flattenChildNodes(Array.from(child.childNodes));
				let current = 1;
				nodes.forEach((node) => {
					console.log(node.parentElement.className.toString())
					if (node.parentElement.className.toString() === "versenum") {
						current += 1;
					}
					if (current in results[i]) {
						results[i][current].push(node);
					} else {
						results[i][current] = [node];
					}
				})
			}
		});
	});
	results.forEach((result) => {
		console.log(result)
	})
	return {};
}

// lineByLine()
zenMode();
