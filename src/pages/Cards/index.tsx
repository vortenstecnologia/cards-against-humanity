import { Card } from '@/components/Card';

import { useFetchCards } from './useFetchCards';

import styles from './styles.module.scss';

export function Cards(): JSX.Element {
  const { isLoading, cards } = useFetchCards();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const whites = cards.filter(({ type }) => type === 'WHITE');
  const blacks = cards.filter(({ type }) => type === 'BLACK');

  return (
    <section>
      <div className={`${styles.cards} ${styles.whites}`}>
        {whites.map(({ id, message, type }) => (
          <Card key={id} message={message} type={type} />
        ))}
      </div>

      <div className={`${styles.cards} ${styles.blacks}`}>
        {blacks.map(({ id, message, type }) => (
          <Card key={id} message={message} type={type} />
        ))}
      </div>
    </section>
  );
}
