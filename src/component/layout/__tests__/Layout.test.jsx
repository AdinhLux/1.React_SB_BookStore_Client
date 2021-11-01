import React from "react";
import { render } from "@testing-library/react";
import Layout from "../Layout";

describe("Layout", () => {
  it("should render layout component", () => {
    const { getByText } = render(
      <Layout>
        <div>test component</div>
      </Layout>
    );

    // toBeInTheDocument() : assert that an element is in the body of the document
    // To test with 'npm run test -- /Users/adinhlux/development/VisualCodeProjects/adinh-book-store-client/src/component/layout/__tests__/Layout.test.jsx'
    expect(getByText("test component")).toBeInTheDocument();
  });
});
