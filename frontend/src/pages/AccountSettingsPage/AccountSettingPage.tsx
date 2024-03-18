import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

const AccountSettingsPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Аккаунт - sMarket</title>
      </Helmet>

      <h1>Account settings</h1>
    </>
  );
};

export default AccountSettingsPage;
