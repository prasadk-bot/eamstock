import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import usePrevious from '../utils/usePrevious';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const getStockTakingDetailsHistoryNewPOSTStatusAndText = (
  Constants,
  { username }
) =>
  fetch(
    `http://fgeam.fluentgrid.com:8888/ims/v1/getStockTakingDetailsHistoryNew`,
    {
      body: JSON.stringify({ userName: username }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const getStockTakingDetailsHistoryNewPOST = (Constants, { username }) =>
  getStockTakingDetailsHistoryNewPOSTStatusAndText(Constants, {
    username,
  }).then(({ status, statusText, text }) => {
    try {
      return JSON.parse(text);
    } catch (e) {
      console.error(
        [
          'Failed to parse response text as JSON.',
          `Error: ${e.message}`,
          `Text: ${JSON.stringify(text)}`,
        ].join('\n\n')
      );
    }
  });

export const useGetStockTakingDetailsHistoryNewPOST = ({ username }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `http://fgeam.fluentgrid.com:8888/ims/v1/getStockTakingDetailsHistoryNew`,
    {
      body: JSON.stringify({ userName: username }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchGetStockTakingDetailsHistoryNewPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  username,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `http://fgeam.fluentgrid.com:8888/ims/v1/getStockTakingDetailsHistoryNew`,
    {
      body: JSON.stringify({ userName: username }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchGetStockTakingDetailsHistoryNew: refetch,
  });
};
