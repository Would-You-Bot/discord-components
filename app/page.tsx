import { OpenInV0Button } from "@/components/open-in-v0-button";
import {
	DiscordChat,
	DiscordMessage,
	DiscordMessageAuthor,
	DiscordMessageAuthorImage,
	DiscordMessageAuthorName,
	DiscordMessageContent,
	DiscordMessageGroup
} from "@/registry/new-york/discord-base/discord-base";

export default function Home() {
	return (
		<div className="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-4 py-8">
			<header className="flex flex-col gap-1">
				<h1 className="font-bold text-3xl tracking-tight">
					Discord Components
				</h1>
				<p className="text-muted-foreground">
					A collection of discord components for integrating discord UIs
					into your project.
				</p>
			</header>
			<main className="flex flex-1 flex-col gap-8">
				<div className="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
					<div className="flex items-center justify-between">
						<h2 className="text-muted-foreground text-sm sm:pl-3">
							Example of basic discord messages
						</h2>
						<OpenInV0Button
							name="hello-world"
							className="w-fit"
						/>
					</div>
					<div className="relative flex min-h-[400px] items-center justify-center">
						<DiscordChat>
							<DiscordMessageGroup>
								<DiscordMessageContent>
									<DiscordMessageAuthor>
										<DiscordMessageAuthorImage
											src="/globe.svg"
											alt="Avatar"
											fallback="WF"
										/>
										<DiscordMessageAuthorName
											timestamp={new Date(Date.now() - 48 * 60 * 60 * 1000)}
										>
											Woofer21
										</DiscordMessageAuthorName>
									</DiscordMessageAuthor>
									<DiscordMessage>Hello World</DiscordMessage>
								</DiscordMessageContent>

								<DiscordMessageContent>
									<DiscordMessage>What is up chat?</DiscordMessage>
								</DiscordMessageContent>
							</DiscordMessageGroup>

							<DiscordMessageGroup>
								<DiscordMessageContent>
									<DiscordMessageAuthor>
										<DiscordMessageAuthorImage
											src="/globe.svg"
											alt="Avatar"
											fallback="DOM"
										/>
										<DiscordMessageAuthorName timestamp={new Date()}>
											Dominik
										</DiscordMessageAuthorName>
									</DiscordMessageAuthor>
									<DiscordMessage>Hi Woofer</DiscordMessage>
								</DiscordMessageContent>
							</DiscordMessageGroup>

							<DiscordMessageGroup>
								<DiscordMessageContent>
									<DiscordMessageAuthor>
										<DiscordMessageAuthorImage
											src="/globe.svg"
											alt="Avatar"
											fallback="WF"
										/>
										<DiscordMessageAuthorName
											timestamp={new Date(Date.now() - 48 * 60 * 60 * 1000)}
										>
											Woofer21
										</DiscordMessageAuthorName>
									</DiscordMessageAuthor>
									<DiscordMessage>
										I am going to send a really long message to see how it
										looks? Are you ready? I am sure it is going to break so be
										ready for the really long message to break everything, we
										love breaning things here don't we? isint it just the
										grandest time?
									</DiscordMessage>
								</DiscordMessageContent>
							</DiscordMessageGroup>
						</DiscordChat>
					</div>
				</div>
			</main>
		</div>
	);
}
