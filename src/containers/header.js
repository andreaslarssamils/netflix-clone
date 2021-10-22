import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constans/routes';

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to="/" src="/images/misc/logo.svg" alt="Netflix" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
