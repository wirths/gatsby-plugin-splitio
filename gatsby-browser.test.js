import React from "react";
import renderer from "react-test-renderer";

import { wrapRootElement } from "./gatsby-browser";

describe("SplitFactory wraps Gatsby root element", () => {
	it("contains the wrapped state", () => {
		const configData = {
			authorizationKey: "heiner",
			key: "hansen",
			plugins: [],
		};
		const wrappedElement = wrapRootElement(`<></>`, configData);

		const tree = renderer.create(wrappedElement).toTree();
		expect(tree.instance.state).toHaveProperty("isReady");
	});
});
