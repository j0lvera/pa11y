import { Text as P, Heading as H } from "rebass";

const Heading = props => <H mt={3} mb={2} {...props} />;
const Text = props => <P as="p" mt={0} mb={3} {...props} />;

export { Text, Heading };
