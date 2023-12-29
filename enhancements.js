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

zenMode();
