import request from 'superagent';

export const AddUser = () => (
  (dispatch) => {
    request.get('https://randomuser.me/api/')
      .then((resp) => {
        const result = resp.body.results[0];
        const newUser = {
          username: result.login.username,
          registered: result.registered,
          pic: result.picture.large,
        };
        dispatch({
          type: 'AddUser',
          data: newUser,
        });
      });
  }
);

export const RemoveUser = username => (
  (dispatch) => {
    dispatch({
      type: 'RemoveUser',
      data: username,
    });
  }
);
