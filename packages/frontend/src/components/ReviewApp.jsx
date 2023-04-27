import AppRouter from '../router/AppRouter';
import { ReviewerProvider } from './context/ReviewerContext';
import { ReviewerLayout } from './layout/ReviewerLayout';

export const ReviewApp = () => {
  return (
    <ReviewerProvider>
      <ReviewerLayout>
        <AppRouter />
      </ReviewerLayout>
    </ReviewerProvider>
  );
};
