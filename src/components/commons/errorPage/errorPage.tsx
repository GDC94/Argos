import Head from "next/head";

import { Layout } from "../LayoutClient";

import {
  ErrorContainer,
  ErrorNumberAndMessage,
  Number,
  MessageButton,
  Message,
  MessageLine,
  ButtonWrapper,
} from "./ErrorPage.styles";

interface ErrorPageProps {
  statusCode?: string | number;
  message: string;
  textButton?: string;
  linkButton?: string;
}

export function ErrorPage({ statusCode, message }: ErrorPageProps) {
  return (
    <Layout full>
      <Head>
        <title>😔 Something went wrong </title>
      </Head>
      <ErrorContainer>
        <ErrorNumberAndMessage>
          <Number>{statusCode}</Number>
          <MessageButton>
            <Message>
              {message}
              <MessageLine />
            </Message>
            <ButtonWrapper>volver</ButtonWrapper>
          </MessageButton>
        </ErrorNumberAndMessage>
      </ErrorContainer>
    </Layout>
  );
}

export default ErrorPage;
