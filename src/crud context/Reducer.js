export default function appReducer(state, action) {
  switch (action.type) {
    case "addcard":
      return {
        ...state,
        card: [...state.card, action.payload],
      };
    case "editcard":
      const updatecard = action.payload;
      const updatecards = state.card.map((card) => {
        if (card.id === updatecard.id) {
          return updatecard;
        }
        return card;
      });
      return {
        ...state,
        card: updatecards,
      };

    case "deletecard":
      return {
        ...state,
        card: state.card.filter((card) => card.id !== action.payload),
      };
    default:
      return state;
  }
}
