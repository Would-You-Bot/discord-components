import { OpenInV0Button } from "@/components/open-in-v0-button";
import {
	DiscordChat,
	DiscordMention,
	DiscordMessage,
	DiscordMessageAuthor,
	DiscordMessageAuthorImage,
	DiscordMessageAuthorName,
	DiscordMessageContent,
	DiscordMessageGroup
} from "@/registry/discord-base/discord-base";

export default function Home() {
	return (
		<div className="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-4 py-8">
			<header className="flex flex-col gap-1">
				<h1 className="font-bold text-3xl tracking-tight">
					Discord Components
				</h1>
				<p className="text-muted-foreground">
					A collection of discord components for integrating discord UIs into
					your project.
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
											src="/images/avatars/Woofer.webp"
											alt="Avatar"
											fallback="WF"
										/>
										<DiscordMessageAuthorName
											timestamp={new Date(Date.now() - 48 * 60 * 60 * 1000)}
										>
											Woofer21
										</DiscordMessageAuthorName>
									</DiscordMessageAuthor>
									<DiscordMessage>Hello World!</DiscordMessage>
								</DiscordMessageContent>

								<DiscordMessageContent>
									<DiscordMessage>What is up chat?</DiscordMessage>
								</DiscordMessageContent>
							</DiscordMessageGroup>

							<DiscordMessageGroup>
								<DiscordMessageContent>
									<DiscordMessageAuthor>
										<DiscordMessageAuthorImage
											src="/images/avatars/Dominik.webp"
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
											src="/images/avatars/Woofer.webp"
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
										ready for the really long message to breaking things here
										don't we? Is it not just the grandest time?
									</DiscordMessage>
								</DiscordMessageContent>
							</DiscordMessageGroup>
						</DiscordChat>
					</div>
				</div>

				<div className="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
					<div className="flex items-center justify-between">
						<h2 className="text-muted-foreground text-sm sm:pl-3">
							Simple Mentions
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
											src="/images/avatars/Woofer.webp"
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
										Yo <DiscordMention type="user">Woofer21</DiscordMention>{" "}
										what is good brother?
										<br />
										<DiscordMention type="role">Admin</DiscordMention> help!!!!
										<br />
										<DiscordMention
											type="role"
											roleColor="#C759FF"
										>
											Owner
										</DiscordMention>{" "}
										whats up bro
										<br />
										Bro literally{" "}
										<DiscordMention type="channel">general</DiscordMention> is
										my fav channel!!
										<br />
										Have you seen the{" "}
										<DiscordMention type="thread">cool-cars</DiscordMention>{" "}
										thread yet?
										<br />
										Join up <DiscordMention type="voice">gaming</DiscordMention>{" "}
										for some gaming!!
										<br />
										<DiscordMention type="stage">Events</DiscordMention> is the
										best stage ever!
										<br />
										Please only post help questions in{" "}
										<DiscordMention type="forum">help</DiscordMention>!!
										<br />
										So much cool media in{" "}
										<DiscordMention type="media">media</DiscordMention>!
										<br />
										Slash commands are cool, try{" "}
										<DiscordMention type="command">ping</DiscordMention>
										<br />
										Make sure to pick up your roles from{" "}
										<DiscordMention type="linked-roles" />
										<br />
										Choose which channels you can see in the{" "}
										<DiscordMention type="browse" /> tab
										<br />
										Learn more about our server in the{" "}
										<DiscordMention type="guide" /> tab
										<br />
										Too bad that you disabled embed links, now this cool image
										wont display :{"( "}
										<DiscordMention type="image-link">image.jpg</DiscordMention>
										<br />
										Make sure to check out more information in this{" "}
										<DiscordMention type="forum-post">
											Channel Information
										</DiscordMention>{" "}
										forum post
									</DiscordMessage>
								</DiscordMessageContent>
							</DiscordMessageGroup>
						</DiscordChat>
					</div>
				</div>

				<div className="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
					<div className="flex items-center justify-between">
						<h2 className="text-muted-foreground text-sm sm:pl-3">
							In-Server Message Link Mentions
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
											src="/images/avatars/Woofer.webp"
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
										Yo, check out this cool message{" "}
										<DiscordMention
											type="message-link"
											modifier="channel"
											modifierText="general"
										/>
										<br />
										Go rate my new car here{" "}
										<DiscordMention
											type="message-link"
											modifier="thread"
											modifierText="cool-cars"
										/>{" "}
										please :{")"}
										<br />
										Can you please help me with this issue{" "}
										<DiscordMention
											type="message-link"
											modifier="forum"
											modifierText="help"
										/>{" "}
										?
										<br />
										Check out my new PC background{" "}
										<DiscordMention
											type="message-link"
											modifier="media"
											modifierText="cool-backgrounds"
										/>
										<br />
										Did you see what bob wanted to tell you in the VC yesterday?{" "}
										<DiscordMention
											type="message-link"
											modifier="voice"
											modifierText="chit-chat"
										/>
										<br />
										Look at this new decoration, should I buy it?{" "}
										<DiscordMention
											type="shop-link"
											modifierText="Aurora"
										/>
									</DiscordMessage>
								</DiscordMessageContent>
							</DiscordMessageGroup>
						</DiscordChat>
					</div>
				</div>

				<div className="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
					<div className="flex items-center justify-between">
						<h2 className="text-muted-foreground text-sm sm:pl-3">
							External Server Message Link Mentions
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
											src="/images/avatars/Woofer.webp"
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
										Yo, check out this channel{" "}
										<DiscordMention
											type="external-server-link"
											modifier="channel"
											modifierText="Would You"
											serverSrc="/images/servers/WouldYou.webp"
											serverAlt={"Server Icon"}
											serverFallback="WY"
										>
											general
										</DiscordMention>
										<br />
										Check out this announcement message from Bob{" "}
										<DiscordMention
											type="external-server-link"
											modifier="message"
											modifierText="Would You"
											serverSrc="/images/servers/WouldYou.webp"
											serverAlt={"Server Icon"}
											serverFallback="WY"
										/>
										<br />
										Join up{" "}
										<DiscordMention
											type="external-server-link"
											modifier="voice"
											modifierText="Would You"
											serverSrc="/images/servers/WouldYou.webp"
											serverAlt={"Server Icon"}
											serverFallback="WY"
										>
											gamin
										</DiscordMention>{" "}
										for some fun gaming!!
										<br />
										Did you see the posts people are making here{" "}
										<DiscordMention
											type="external-server-link"
											modifier="forum"
											modifierText="Would You"
											serverSrc="/images/servers/WouldYou.webp"
											serverAlt={"Server Icon"}
											serverFallback="WY"
										>
											help
										</DiscordMention>{" "}
										?
										<br />
										Look at what bob answered to this question{" "}
										<DiscordMention
											type="external-server-link"
											modifier="forum-message"
											modifierText="Would You"
											serverSrc="/images/servers/WouldYou.webp"
											serverAlt={"Server Icon"}
											serverFallback="WY"
										>
											cool-cars
										</DiscordMention>
										<br />
										Check out this cool video{" "}
										<DiscordMention
											type="external-server-link"
											modifier="media"
											modifierText="Would You"
											serverSrc="/images/servers/WouldYou.webp"
											serverAlt={"Server Icon"}
											serverFallback="WY"
										>
											cool-backgrounds
										</DiscordMention>
										<br />
										Quick, join up, the stage is starting soon{" "}
										<DiscordMention
											type="external-server-link"
											modifier="stage"
											modifierText="Would You"
											serverSrc="/images/servers/WouldYou.webp"
											serverAlt={"Server Icon"}
											serverFallback="WY"
										>
											Events
										</DiscordMention>
										<br />
										They lock{" "}
										<DiscordMention
											type="external-server-link"
											modifier="locked"
											modifierText="Would You"
											serverSrc="/images/servers/WouldYou.webp"
											serverAlt={"Server Icon"}
											serverFallback="WY"
										>
											events
										</DiscordMention>{" "}
										when no events are going on :{"{"}
									</DiscordMessage>
								</DiscordMessageContent>
							</DiscordMessageGroup>
						</DiscordChat>
					</div>
				</div>
			</main>
			<footer>
				<div className="flex items-center justify-between border-t pt-6">
					<p className="text-muted-foreground text-sm">
						Made with <span>❤️</span> by{" "}
						<a
							className="text-white/80 hover:underline"
							href="https://woofer21.com/"
							target="_blank"
							rel="noreferrer"
						>
							<span>Woofer21</span>
						</a>{" "}
						and{" "}
						<a
							className="text-white/80 hover:underline"
							href="https://github.com/Would-You-Bot/discord-components/graphs/contributors"
							target="_blank"
							rel="noreferrer"
						>
							Contributors
						</a>
						!
					</p>
					<a
						className="text-white/80 hover:underline"
						target="_blank"
						rel="noreferrer"
						href="https://wouldyoubot.gg/legal"
					>
						Legal Notice
					</a>
				</div>
			</footer>
		</div>
	);
}
