import React from "react";
import PropTypes from "prop-types";
import { SplitFactory } from "@splitsoftware/splitio-react";

export const wrapRootElement = ({ element }, pluginOptions) => {
	pluginOptions.authorizationKey ||
		console.log(`
    Please add an authorizationKey for Split.io via gatsby-plugin-splitio 
    otherwise the plugin will not work!
  `);
	return (
		<SplitFactory config={{ core: pluginOptions }}>{element}</SplitFactory>
	);
};

wrapRootElement.propTypes = {
	element: PropTypes.element.isRequired,
};
