import React from 'react';

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... your form inputs ... */}
      <button id="submit" className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">
        Sign in
      </button>
    </form>
  );
}
