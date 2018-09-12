import React from 'react';
import Helmet from 'react-helmet';
import { Elements } from 'react-stripe-elements';

import { TranslateFunction } from '../../../../../i18n';
import { LayoutCenter } from '../../../../common/components/web';
import { PageLayout } from '../../../../common/components/web';

import SubscriptionCardForm from './SubscriptionCardFormView';
import settings from '../../../../../../../../settings';
import { CreditCardInput } from '../types';

interface UpdateCardViewProps {
  onSubmit: (subscriptionInput: CreditCardInput, stripe: any) => void;
  t: TranslateFunction;
  submitting: boolean;
}

export default (props: UpdateCardViewProps) => {
  const { t } = props;

  return (
    <PageLayout>
      <Helmet title={`${settings.app.name} - ${t('update.title')}`} />
      <LayoutCenter>
        <h1 className="text-center">{t('update.subTitle')}</h1>
        <Elements>
          <SubscriptionCardForm {...props} buttonName={t('update.action')} />
        </Elements>
      </LayoutCenter>
    </PageLayout>
  );
};
