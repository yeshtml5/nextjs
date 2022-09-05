/**
 * @name useToggle
 * @description 사용법
 */
import { useCallback, useState } from "react";

export const useToggle = (initialState: boolean = false): [boolean, any] => {
  // hooks
  const [state, setState] = useState<boolean>(initialState);
  const toggle = useCallback((): void => setState((state) => !state), []);
  return [state, toggle];
};
/********************************************************
[사용법]

import {useObject} from '@app/lib/hooks'

const Debug = () => {
  const [visible1, toggle1] = useToggle(false)  // 다양하게사용가능
  const [visible2, toggle2] = useToggle(false)

  return (
    <Container>
      <Button
        onPress={() => {
          toggle1()
        }}>
        toggle실행
      </Button>
      <Text>{visible1 + ''}</Text>
    </Container>
  )
}
export default Debug

*********************************************************/
