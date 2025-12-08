type TProps = {
	params: Promise<{
		type: string;
		stringId: string;
	}>;
};

export default async function MoviesTVPage(props: TProps) {
	const params = await props.params;
	const { type, stringId } = params;

	return (
		<article>
			<section>
				Typ: {type}
				<br />
				ID: {stringId}
			</section>
		</article>
	);
}
