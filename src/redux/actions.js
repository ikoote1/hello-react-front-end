// src/redux/actions.js
export const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';

export const fetchGreetingSuccess = (greeting) => ({
  type: FETCH_GREETING_SUCCESS,
  payload: greeting,
});

export const fetchRandomGreeting = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/random_greeting');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data.message);
      dispatch(fetchGreetingSuccess(data.message));
    } catch (error) {
      console.error('Error fetching greeting:', error);
    }
  };
};

