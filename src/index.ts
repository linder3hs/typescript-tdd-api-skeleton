import { app } from './app';
import env from './config/env';

const port = env.PORT || 9000;

app.listen(port, () => console.log(`Server listening in ${port}`));
