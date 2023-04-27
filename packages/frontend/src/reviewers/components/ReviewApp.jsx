import AppRouter from '../../router/AppRouter';
import { ReviewerProvider } from './context/ReviewerContext';
import { ReviewerLayout } from './layout/ReviewerLayout';

export const ReviewApp = () => {
  return (
    <ReviewerProvider>
      <ReviewerLayout>
        <AppRouter />

        {/* FIXME: Hay que priorizar tratar de usar styled components en vez de usar sx. Si son mas de 3 propiedades de sx que se usan o se usan selectores complejos*/}
      </ReviewerLayout>
    </ReviewerProvider>
  );
};
