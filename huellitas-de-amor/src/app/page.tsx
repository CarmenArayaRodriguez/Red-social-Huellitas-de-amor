'use client';
import Header from './reutilizables/header/Header';
import FormLogin from './login/FormLogin'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <main>
      <Header />
      <FormLogin />

    </main>
  )
}
