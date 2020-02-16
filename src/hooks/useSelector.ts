import { RootState } from 'src/reducers';
import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook
} from 'react-redux';

const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export default useSelector;