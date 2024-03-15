import { Helmet } from 'react-helmet-async';
import { PageWrapper } from '../../styles/global';

function AccountSettingsPage() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Аккаунт - sMarket</title>
      </Helmet>

      <h1>Account settings</h1>
    </PageWrapper>
  );
}

export default AccountSettingsPage;
