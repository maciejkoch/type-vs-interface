type Success<T> = {
  status: 'Success';
  data: T;
};

type Failure = {
  status: 'Failure';
  error: string;
};

type Loading = {
  status: 'Loading';
};

export type State<T> = Success<T> | Failure | Loading;

const success: State<number> = {
  status: 'Success',
  data: 123,
  error: 'Something went wrong', // 'error' does not exist in type 'Success<number>'
};

const failure: State<number> = {
  // 'error' is missing in type 'Failure'
  status: 'Failure',
};

const loading: State<number> = {
  status: 'Loading',
  data: 123, // 'data' does not exist in type 'Loading'
};

function handleState(state: State<number>): void {
  switch (state.status) {
    case 'Success':
      console.log('Data:', state.data);
      break;
    case 'Failure':
      console.error('Error:', state.error);
      break;
    case 'Loading':
      console.log('Loading...');
      break;
  }
}
