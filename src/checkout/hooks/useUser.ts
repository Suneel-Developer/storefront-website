import { useUserQuery } from "@/checkout/graphql";

export const useUser = () => {
	const [{ data, fetching: loading, stale }] = useUserQuery();

	const user = data?.user;

	const authenticated = !!user?.id;

	return { user, loading: loading || stale, authenticated };
};
