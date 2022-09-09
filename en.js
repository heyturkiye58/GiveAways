module.exports = {
    overview: require("../locales.config.js")["en"],
    navbar: {
        home: 'Home',
        dashboard: 'Dashboard',
        discover: 'Discover',
        partners: 'Partners',
        team: 'Team',
        status: 'Status',
        support: 'Support Server',
        invite: 'Invite Bot',
        login: 'Login'
    },
    footer: {
        rights: 'All rights reserved.',
        description: 'The best giveaway bot on Discord. Organically improve your Discord Server by creating giveaways. It\'s in your hands...',
        menus: {
            first: {
                title: 'Important',
                items: {
                    home: 'Home',
                    dashboard: 'Dashboard',
                    support: 'Support Server',
                    add: 'Add Bot'
                }
            },
            second: {
                title: 'GiveAways',
                items: {
                    partners: 'Partners',
                    team: 'Team',
                    status: 'Status',
                    upvote: 'Upvote'
                }
            },
            third: {
                title: 'Company',
                items: {
                    tos: 'Terms of Service',
                    privacy: 'Privacy Policy'
                }
            },
            four: {
                title: 'Vote for GiveAways',
                items: {
                    topgg: 'Top.gg'
                }
            },
        },
        developedWith1: 'Developed with',
        developedWith2: 'by clqu & Swôth & edited by the GiveAways Team.',
        allServices: 'All services are online.',
        someServices: 'Some services are down.'
    },
    index: {
        title: 'The best giveaway bot on Discord!',
        description: 'By creating advanced giveaways with GiveAways, you can improve your Discord Server and gain organic lift!',
        buttons: {
            dashboard: 'Dashboard',
            support: 'Support Server',
            with_discord: 'Login with Discord'
        },
        features: {
            title: 'Why <span class="text-amber-500 font-bold">GiveAways</span>?',
            description: 'With GiveAways, you can improve your Discord Server and get organic increases by creating advanced sweepstakes!',
            buttonText: 'Add to Discord',
            items: [
                 { icon: 'fal fa-star', title: 'Easily Create Conditional Giveaway', description: 'You can have the members of your dreams in a short time. You can get organic increase by opening conditional giveaways. Why not try opening a raffle for more information?' },
                 { icon: 'fal fa-star', title: 'Build Your Own Giveaways', description: 'You can quickly add the bot to the server and create and customize your own giveaway on the site. You can check who has participated in the giveaway in detail via the Dashboard.'},
                 { icon: 'fal fa-star', title: 'Discover Giveaways ', description: 'You can participate in the giveaway according to you in the Discover section and win prizes, and you can see the remaining time and detailed information on the panel.' },
                 { icon: 'fal fa-star', title: 'Self Feel Special', description: 'By purchasing Boost, you can giveaway more than 20 simultaneous giveaways on your server, however, you can repeat and embed 20 times on a giveaway. You can make it safe by adding a password to your giveaways.' }
            ]
        },
        advanced: [
            { placement: "left", imageUrl: 'https://i.imgur.com/lmotpuT.png', title: 'Improve your giveaways on your Discord Server', description: 'Develop and grow your Discord Server organically with GiveAways.'},
            { placement: "right", imageUrl: 'https://i.imgur.com/aQFJbiI.png', title: 'Lock your giveaways', description: "Privately encrypt your giveaways with GiveAways's lock system." },
            { placement: "left", imageUrl: 'https://i.imgur.com/KsBUSAB.png', title: 'Grow your server', description: "You can grow your servers faster by adding an invitation requirement to their giveaways." }
        ],
        statistics: {
            chosen: 'Chosen by <span class="text-amber-500">{server_count}</span> guilds',
            labels: {
                guilds: 'Guilds',
                members: 'Members',
                giveaways: 'Giveaways',
                joins: 'Joins'
            }
        }
    },
    daily: {
        title: "Daily Rewards",
        description: "Claim your daily Rewards here.",
        your_last_reward_was: "Your last reward was",
        claim_button: "Claim"
    },
    discover: {
        title: 'Discover',
        description: 'Discover public giveaways here and enter the giveaways to find and win the prize you need!',
        searchInput: 'Search by gifts, title, server name, etc.',
        settings: {
            title: 'Settings',
            description: 'The giveaway are the sorting settings.',
            amount: {
                title: 'Amount',
                description: 'Allows you to change the number of giveaway to be listed.'
            },
            sort: {
                title: 'Sort',
                miniNote: 'sorting by prize',
                description: 'Allows you to change the listing order.'
            }
        },
        az: '(A-Z) Alphabetic',
        za: '(Z-A) Alphabetic',
        noreq: 'No requirements.',
        reqs: 'Requirements'
    },
    spotify: {
      not: 'Not listening anything on Spotify.',
      current: 'Listening on Spotify.'
    },
    team: {
        title: 'Get to know the heroes!',
        description: 'Here you can find everyone who works and contributes to GiveAways. <br> Many thanks to our team! <3',
        linkcordLang: 'en',
        noWidget: 'No Widget',
        roles: {
            'Founder': 'Founder',
            'Co-Founder': 'Co-Founder',
            'Community-Manager': 'Community Manager',
            'Developer': 'Developer',
            'Designer': 'Designer',
            'Moderator': 'Moderator',
            'Helper': 'Helper'
        }
    },
    create: {
        title: 'Create a giveaway!',
        description: 'Distribute gifts to your members by creating a giveaway!',
        inputs: {
            title: {
                title: 'Title',
                description: 'Enter your giveaway title'
            },
            description: {
                title: 'Description',
                description: 'Enter your giveaway description'
            },
            prize: {
                title: 'Prize',
                description: 'Enter your giveaway prize'
            },
            banner: {
                title: 'Banner',
                description: 'Add your Banner'
            },
            enddate: {
                title: 'End Date',
                description: 'Enter the date the giveaway will end'
            },
            winners: {
                title: 'Winners Count',
                description: 'Enter the winners count',
                recommendet: 'Recommended: 1 Winner'
            },
            channel: {
                title: 'Channel',
                description: 'The giveaway message will be sent in this channel'
            },
            requirements: {
                title: 'Requirements',
                description: 'Once your members meet the conditions you set, they will be able to participate in the giveaway'
            },
            role: {
                title: 'Required Role',
                description: 'Select the Discord role that can participate in the giveaway.'
            },
            old: {
                title: 'Account Older',
                description: 'How much days should be the account old?'
            },
            age: {
                title: 'Member Age',
                description: 'How much days should be the user in the server?'
            },
            norole: {
                title: 'Required No Role',
                description: 'Select the Discord role that cant participate in the giveaway.'
            },
            invite: {
                title: 'Number of Invites Required',
                description: 'Select how many invitations members need to enter the giveaway. (Ex: 3)'
            },
            presentation: {
                title: 'Presentation',
                description: 'If you select "Private" your giveaway will not appear in Discover, but if you select "Public" your giveaway will appear in discovery.'
            },
            tag: {
                title: 'Member Tag',
                description: 'What should be the tag that can participate in the giveaway.'
            },
            message: {
                title: 'Message Limit Required',
                description: 'What should be the message limit that she needs to enter the giveaway. (Ex: 100)'
            },
            
        },
        button: "Submit",
        presentationPrivate: 'Private',
        presentationPublic: 'Public',
        requirementsDropdownText: 'Do you want more requirements? Join our Discord server and ask us for new requirements!',
        presentationTippy: 'Important setting',
        unReachTippy: 'This is your right to open a giveaway. You have the right to open {MORE} more giveaways.',
        reachTippy: 'You have reached your giveaway limit.',
        reachedText: 'You\'ve reached the giveaway limit.<br /> <span class="text-amber-400/50 ml-1 hover:underline cursor-pointer"><i class="fad fa-diamond"></i> Boost</span> the server to more limit.'
    },
    partners: {
        title: "Partners",
        description: "You can see our partners here!"
    },
    user: {
        profile: {
            giveaways: {
                title: '{USER}\'s joined giveaways'
            }
        },
        dropdown: {
            profile: 'Profile',
            guilds: 'Guilds',
            daily: 'Daily',
            upvote: 'Upvote',
            panel: 'Panel',
            redeem: 'Redeem',
            notifications: 'Notifications',
            logout: 'Logout',
            _profile: 'View your profile!',
            _guilds: 'Select a server!',
            _daily: 'Claim your Daily Reward!',
            _upvote: 'Upvote for GiveAways!',
            _panel: 'Very, very secret :)',
            _redeem: 'Use promo code!',
            _notifications: 'View your Notifications!',
            _logout: 'Terminate the website session!'
        },
        notifications: {
            title: "Your Notifications",
            won_part1: "You've won the",
            won_part2: "giveaway!",
            won_part3: "Your reward is here:",
            won_part4: "If the prize is invalid, contact the giveaway owner.",
            no_notifications: "No notification here!",
       },
       connections: {
        title: 'Connections',
        description: 'You can manage social media accounts on GiveAways here.',
        button: {
            logout: 'Click to logout',
            connect: 'Connect to <b>{PROVIDER}</b>',
            connectMini: 'Click to connect',
            logged: 'Logged in as <b>{ACCOUNT}</b>'
        }
    },
        redeem: {
            title: 'Redeem',
            description: 'You can redeem your code here!',
            inputPlaceholder: 'Your gift code here',
            button: 'Redeem',
            didntWork: 'The code didn\'t work?',
            success: '🎉 Congratulations! {COUNT} boosts added to your account!'
        }
    },
    dashboard: {
        managing: 'You are managing:',
        pages: 'Sites',
        more: 'More',
        not_autorized_message: 'You are not autorized to manage this server!',
        selectServer: {
            title: 'Select Server',
            description: 'If your server is not here, <u>login</u> again!',
            serverUnderText: 'Click to select!',
            buttons: {
                manage: 'Manage',
                add: 'Setup Bot'
            }
        },
        settings: {
            free: 'Free',
            soon: 'COMMING SOON',
            _soon: 'Only those who have reached the last boost level can use it.',
            embed_editor_title: 'Embed Editor',
            bot_name: 'GiveAways',
            bot_label: 'bot',
            today_at: 'Today at',
            youcan: 'You can add text to areas with italics and low opacity. You can edit the text you want by clicking on it. (Required fields cannot be edited!)',
            reset: 'Reset',
            save: 'Save',
            logs_title: 'Logs',
            logs_desc: 'Post Logs to a Discord Channel',
            enabled: 'Enabled',
            disabled: 'Disabled',
            log_channel_title: 'Log Channel'
          },
          allgiveaways: {
              create_button_title: 'Create',
              title_label: 'Titel',
              prize_label: 'Prize',
              total_winners_label: 'Total Winners',
              status_title: 'Status',
              total_participants: 'Total Participants',
              pin_label: 'Pin Code',
              actions_label: 'Actions'
          },
        stats: {
            total: 'Total Giveaways',
            active: 'Active Giveaways',
            activeTippy: 'Boost to increase the limit!',
            ended: 'Ended Giveaways',
            participants: 'Total Participants'
        },
        sidebar: {
            dashboard: 'Dashboard',
            create: 'Create Giveaway',
            active: 'Active Giveaways',
            ended: 'Ended Giveaways',
            all: 'All Giveaways',
            boost: 'Boosts',
            settings: 'Settings'
        },
        auditLog: {
            title: 'Audit Log',
            description: 'Audit log of changes made to GiveAways on this server can be seen here.',
            table: {
                user: 'User',
                date: 'Date',
                action: 'Action',
                message: 'Message'
            },
            boost: 'Boosted the server.',
            unboost: 'Unboosted the server.',
            giveaway_delete: 'Deleted a giveaway.',
            giveaway_create: 'Started a giveaway.',
            giveaway_finish: 'Giveaway a finished.',
            giveaway_join: 'Joined the giveaway.',
            giveawaY_reroll: 'Rerolled a giveaway.'
        },
    },
};
