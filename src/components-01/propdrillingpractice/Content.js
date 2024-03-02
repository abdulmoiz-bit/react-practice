import Message from "./Message"

function Content({ user }) {
    return (
      <div>
        <Message user={user} />
      </div>
    );
  }

export default Content;