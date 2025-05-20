const MatchDisplay = ({ matches }) => {
  if (matches.length === 0) return null;

  return (
    <div className="match-display">
      <h2>Matches</h2>
      <ol>
        {matches.map((match, index) => (
          <li key={index}>
            <strong>{match.team1.join(" + ")}</strong> vs{" "}
            <strong>{match.team2.join(" + ")}</strong>
            {match.sitOut && (
              <span>
                {" "}
                — <em>{match.sitOut} sits out</em>
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MatchDisplay;
