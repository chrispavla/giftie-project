function Home({ user }) {
  return (
    <div>
      {!user ? (
        <h1>Welcome to Giftie</h1>
      ) : (
        <h1>Welcome to Giftie, {user.username}!</h1>
      )}
    </div>
  );
}

export default Home;
