import Content from "./Content"

function MainPage({ user }) {
    return (
      <div>
        <h3>Main Page</h3>
        <Content user={user} />
      </div>
    );
  }

export default MainPage;