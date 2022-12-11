import { useSession, signIn, signOut } from "next-auth/react";

export default function authTest() {
  const { data: session } = useSession();

  const clickHandler = async () => {
    const response = await fetch("/api/restricted", {
      method: "POST",
      body: JSON.stringify(session ? session : { user: { name: null } }),
    });
    const tempData = await response.json();
    console.log(tempData);
  };

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut({ redirect: false })}>Sign out</button>
        <button onClick={clickHandler}>Reach out to api</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
      <button onClick={clickHandler}>Reach out to api</button>
    </>
  );
}
