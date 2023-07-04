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

export const postStockDetailsServicePOSTStatusAndText = (
  Constants,
  {
    actualQuantity,
    binLocation,
    buttonType,
    dispQuantity,
    flag1,
    materialName,
    quantity,
    remarks,
    scheduleNo,
    uploadImage1,
    uploadImage2,
    uploadImage3,
    username,
  }
) =>
  fetch(`http://fgeam.fluentgrid.com:8888/ims/v1/setStockTakingDetails`, {
    body: JSON.stringify({
      binLocation: binLocation,
      quantity: quantity,
      actualQuantity: actualQuantity,
      discrepancyQuantity: dispQuantity,
      remarks: remarks,
      schNo: scheduleNo,
      empName: username,
      buttonType: buttonType,
      flag1: flag1,
      materialName: materialName,
      filesBaseString: [uploadImage1, uploadImage2, uploadImage3],
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const postStockDetailsServicePOST = (
  Constants,
  {
    actualQuantity,
    binLocation,
    buttonType,
    dispQuantity,
    flag1,
    materialName,
    quantity,
    remarks,
    scheduleNo,
    uploadImage1,
    uploadImage2,
    uploadImage3,
    username,
  }
) =>
  postStockDetailsServicePOSTStatusAndText(Constants, {
    actualQuantity,
    binLocation,
    buttonType,
    dispQuantity,
    flag1,
    materialName,
    quantity,
    remarks,
    scheduleNo,
    uploadImage1,
    uploadImage2,
    uploadImage3,
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

export const usePostStockDetailsServicePOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => postStockDetailsServicePOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('todos', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('todo');
        queryClient.invalidateQueries('todos');
      },
    }
  );
};

export const FetchPostStockDetailsServicePOST = ({
  children,
  onData = () => {},
  refetchInterval,
  actualQuantity,
  binLocation,
  buttonType,
  dispQuantity,
  flag1,
  materialName,
  quantity,
  remarks,
  scheduleNo,
  uploadImage1,
  uploadImage2,
  uploadImage3,
  username,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    loading,
    data,
    error,
    mutate: refetch,
  } = usePostStockDetailsServicePOST(
    {
      actualQuantity,
      binLocation,
      buttonType,
      dispQuantity,
      flag1,
      materialName,
      quantity,
      remarks,
      scheduleNo,
      uploadImage1,
      uploadImage2,
      uploadImage3,
      username,
    },
    { refetchInterval }
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
    refetchPostStockDetailsService: refetch,
  });
};
