import { useRouter } from 'next/router';

const ErrorPage = () => {
  const router = useRouter();
  const { error } = router.query; // Get error query parameter

  return (
    <div className="error-page">
      <h1>Authentication Error</h1>
      {error && <p>{`Error: ${error}`}</p>}
    </div>
  );
};

export default ErrorPage;
