import { addNew } from './addNew';
import { toggle } from './toggle';
import { removeClosed } from './removeClosed';
import { sort } from './sort';
import { load } from './load';

let bugActionCreators = { addNew, toggle, removeClosed, sort, load};

export default bugActionCreators;