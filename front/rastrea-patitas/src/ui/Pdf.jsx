// eslint-disable-next-line no-unused-vars
import React from "react";
import { Document, Text, Page, StyleSheet, Image, View } from "@react-pdf/renderer";

function Pdf() {
	return (
		<Document>
			<Page size="A4">
				<Text>PDF</Text>
			</Page>
		</Document>
	);
}

export default Pdf;
