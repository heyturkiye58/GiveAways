module.exports = {
    overview: require("../locales.config.js")["tr"],
    navbar: {
        home: 'Ana Sayfa',
        dashboard: 'Kontrol Paneli',
        discover: 'Keşfet',
        partners: 'Ortaklar',
        team: 'Ekibimiz',
        status: 'Durum',
        support: 'Discord sunucumuz',
        invite: 'Botu davet et',
        login: 'Giriş yap'
    },
    footer: {
        rights: 'Tüm hakları saklıdır.',
        description: 'GiveAways discord çekiliş botuyla en iyi çekilişi yönetin. Senin elinde...',
        menus: {
            first: {
                title: 'Önemli',
                items: {
                    home: 'Ana Sayfa',
                    dashboard: 'Kontrol Paneli',
                    support: 'Discord Sunucumuz',
                    add: 'Botu davet et'
                }
            },
            second: {
                title: 'GiveAways',
                items: {
                    partners: 'Ortaklarımız',
                    team: 'Ekibimiz',
                    status: 'Durum',
                    upvote: 'İstatistikler'
                }
            },
            third: {
                title: 'Politikalarımız',
                items: {
                    tos: 'Kullanım Şartları',
                    privacy: 'Güvenlik politikası'
                }
            },
            four: {
                title: 'Oy ver',
                items: {
                    topgg: 'Top.gg'
                }
            },
        },
        developedWith1: 'Geliştiren ekibimiz:',
        developedWith2: 'clqu ve Swôth tarafından geliştirilmiş, GiveAways Ekibi tarafından ❤ ile düzenlenmiştir.',
        allServices: 'Tüm hizmetlerimiz aktif.',
        someServices: 'Tüm hizmetlerimiz deaktif.'
    },
    index: {
        title: 'Discord\'un en gelişmiş çekiliş botu!',
        description: 'GiveAways\'ta çekiliş oluşturarak en gelişmiş GiveAways deneyimini yaşayabilirsiniz!',
        buttons: {
            dashboard: 'Kontrol Paneli',
            support: 'Destek sunucumuz',
            with_discord: 'Discord ile giriş yap'
        },
        features: {
            title: 'Niçin<span class="text-amber-500 font-bold">GiveAways</span>?',
            description: 'GiveAways ile Discord Sunucunuzu en gelişmiş şekilde geliştirebilir ve çekilişler oluşturarak organik büyüme artışı yakalayabilirsiniz!',
            buttonText: 'Botu davet et',
            items: [
                 { icon: 'fal fa-star', title: 'GiveAways ile Discord Sunucunuzu en gelişmiş şekilde geliştirebilir ve çekilişler oluşturarak organik büyüme artışı yakalayabilirsiniz! ' },
                 { icon: 'fal fa-star', title: 'Bireysel Çekilişlerinizi Oluşturabilirsiniz!', description: 'GiveAways\'ı discord sunucunuza ekleyebilir veya yahut sitede kendi çekilişinizi oluşturup bireysel çekilişinizi oluşturabilirsiniz. Bilahare zamanda çekilişe kimlerin katıldığını kontrol panelimizden öğrenebilirsiniz!'},
                 { icon: 'fal fa-star', title: 'Oluşturulan çekilişleri GiveAways\'ta Keşfedin ', description: 'Keşfet\'te bulunan GiveAways çekilişlerine katılıp ödüller kazanabilirsiniz! Çekilişin süresini kontrol panelinden de kontrol edebilirsiniz!' },
                 { icon: 'fal fa-star', title: 'Kendinizi Bireysel Hissedin', description: 'GiveAways Boost sistemleri ile 20\'den fazla çekiliş oluşturabilirsiniz! Ek olarak çekilişlerini özel şifre ile kilitleyebilirsiniz!'}
            ]
        },
        advanced: [
            { placement: "left", imageUrl: 'https://i.imgur.com/lmotpuT.png', title: 'GiveAways ile çekilişlerinizi özelleştirin', description: 'Özel çekilişler ile giveaways'ta bireysel çekilişi özelleştirebilirsiniz!'},
            { placement: "right", imageUrl: 'https://i.imgur.com/aQFJbiI.png', title: 'GiveAways çekilişinizi özel kilit sistemiyle kilitleyin', description: 'GiveAways\'ın özel kilit sistemi ile bireysel çekilişinizi özel kilit sistemiyle kilitleyebilirsiniz. Böylece tanımadığınız insan çekilişinize katılamaz!' },
            { placement: "left", imageUrl: 'https://i.imgur.com/KsBUSAB.png', title: 'GiveAways çekilişlerinize şartlar koyun', description: 'GiveAways çekilişlerinize belirli şartlar koyabilirsiniz! (Örneğin: davet sayısı ile katılan kişi ne kadar davet ettiyse çekilişe ancak o zaman katılabilir!)' }
        ],
        statistics: {
            chosen: 'GiveAways,<span class="text-amber-500">{server_count}</span> sunucuda hizmet veriyor! ',
            labels: {
                guilds: 'Sunucu',
                members: 'Üye sayısı',
                giveaways: 'Çekilişler',
                joins: 'Katılan'
            }
        }
    },
    daily: {
        title: "Günlük Ödüller",
        description: "Günlük Ödüllerinizi buradan isteyebilirsiniz!",
        your_last_reward_was: "Son ödülün ",
        claim_button: "İddia"
    },
    discover: {
        title: 'Keşfet',
        description: 'Keşfet ile GiveAways\'ta bulunan çekilişleri kontrol edebilir ve katılabilirsiniz!',
        searchInput: 'Çekilişi bulamadın mı? Burdan çekilişin adını yazarak bulabilirsin!',
        settings: {
            title: 'Ayarlar',
            description: 'bu bölümden aradığınız çekilişi filtreleyin!',
            amount: {
                title: 'Tutar',
                description: 'Çekilişlerin tutarlarını ayarlayarak çekilişlerin kaç kişi katılayabileceğini öğrenebilirsiniz!'
            },
            sort: {
                title: 'Sıralama',
                miniNote: 'ödül sıralama',
                description: 'Ödülleri alfabetik ya da ters alfabetik olarak sıralayabilirsiniz.'
            }
        },
        az: '(A-Z) Alfabetik',
        za: '(Z-A) Ters Alfabetik',
        noreq: 'Gerekli şart bulunmamaktadır.',
        reqs: 'Şartlar'
    },
    spotify: {
      not: 'Spotify şuan dinlemiyor.',
      current: 'Spotify dinliyor..'
    },
    team: {
        title: 'Cesur kahramanlarımız!',
        description: 'GiveAways\'ı geliştirmeye sağlayan ekip listesi burasıdır.<br> Ekibimize çok teşekkür ederiz <3',
        linkcordLang: 'en',
        noWidget: 'Widget Yok',
        roles: {
            'Founder': 'Kurucu',
            'Co-Founder': 'Diğer kurucu',
            'Community-Manager': 'Topluluk Yöneticisi',
            'Developer': 'Geliştirici',
            'Designer': 'Tasarımcı',
            'Moderator': 'Moderatör',
            'Helper': 'Yardımcı'
        }
    },
    create: {
        title: 'Çekiliş oluştur!',
        description: 'GiveAways\'ta bir çekiliş oluşturun.',
        inputs: {
            title: {
                title: 'Adı',
                description: 'Çekilişin adını girin.'
            },
            description: {
                title: 'Açıklama',
                description: 'Çekilişin açıklamasını girin.'
            },
            prize: {
                title: 'Ödül',
                description: 'Çekilişin ödülünü girin.'
            },
            banner: {
                title: 'Üst resim',
                description: 'Çekiliş te kullanılacak üst resmi giriniz. (mecburi değil)'
            },
            enddate: {
                title: 'Bitiş tarihi',
                description: 'Çekilişin bitiş tarihi nedir?'
            },
            winners: {
                title: 'Kazanan Sayısı',
                description: 'Çekilişin kazanan sayısı kaç olacak?',
                recommendet: 'Tavsiye: 1 kazanan yazabilirsiniz.'
            },
            channel: {
                title: 'Kanal',
                description: 'Çekiliş kangi kanala gönderilecek?'
            },
            requirements: {
                title: 'Şartlar',
                description: 'Üyeler hangi belirli şartlar ile çekilişe katılabilsin?'
            },
            role: {
                title: 'Gerekli Rol',
                description: 'GiveAways\'ta çekilişe katılabilmeleri için hangi rol gereklidir?'
            },
            old: {
                title: 'Discord hesap yaşı',
                description: 'Discord\'a kayıtlı olduktan sonra çekilişe katılabilmek için hesabın kaç günlük olması gereklidir? (Örneğin: 3 diyebilirsiniz. 3 = 3 gün)'
            },
            age: {
                title: 'Discord sunucu üye yaşı',
                description: 'Çekilişe katılan üye sunucuya kaç gün önce katılmalıdır? (Örneğin: 1 diyebilirsiniz.)'
            },
            norole: {
                title: 'Çekilişe katılmayacak rol seçin',
                description: 'Çekilişe katılmayacak discord rolünü seçin.'
            },
            invite: {
                title: 'Gerekli Davet Sayısı',
                description: 'Üyelerin çekilişe bilahare katıldığı zaman başka biri getirmesi gereken sayıyı seçin. (Örneğin: 3 Davet)
            },
            presentation: {
                title: 'Gizlilik ayarları',
                description: 'Açık\'ı seçerseniz çekiliş keşfette gözükecek, Kapalı yı seçerseniz de keşfette gözükmeyecektir.'
            },
            tag: {
                title: 'Tag Etiketi',
                description: 'Çekilişe katılabilecek isim tagı ne olmalı?'
            },
            message: {
                title: 'Mesaj Sınırı',
                description: 'Çekilişe girebilmesi için gerekli mesaj sınırı nedir? (Örneğin: 100)'
            },  
        },
        button: "Kaydet",
        presentationPrivate: 'Gizli',
        presentationPublic: 'Açık',
        requirementsDropdownText: 'Gereksinim istiyor musunuz? O zaman o vakit discord sunucumuza katılın ve gereksinim isteyin!',
        presentationTippy: 'Önemli ayar',
        unReachTippy: 'Bu çekiliş hakkınızdır. Şu an {MORE} çekiliş daha açma hakkınız var. Boost alarak 20\'ye bunu yükseltebilirsin.',
        reachTippy: 'Çekiliş oluşturma hakkınız bitmiştir.',
        reachedText: 'Hediye sınırına ulaştınız.<br /> <span class="text-amber-400/50 ml-1 hover:underline cursor-pointer"><i class="fad fa-diamond"></i> Boost</span> satın alarak çekiliş sınırı 20/'ye çıkartabilirsiniz!'
    },
    partners: {
        title: "Ortaklarımız",
        description: "Ortaklarımızı bu bölümden ulaşarak görebilirsiniz!"
    },
    user: {
        profile: {
            giveaways: {
                title: '{USER}\'in katılmış olduğu çekilişler'
            }
        },
        dropdown: {
            profile: 'Profil',
            guilds: 'Sunucularınız',
            daily: 'Günlük ödüller',
            upvote: 'Oy ver',
            panel: 'Panel',
            redeem: 'Kodu gir',
            notifications: 'Bildirimler',
            logout: 'Çıkış yap',
            _profile: 'Profilinizi görüntüleyin!',
            _guilds: 'Sunucu seç!',
            _daily: 'Günlük ödüllerini al!',
            _upvote: 'GiveAways/'a top.gg üzerinden oy ver!',
            _panel: 'Yöneticilerin görebildiği yönetici paneli :)',
            _redeem: 'promo kodunuzu girin!',
            _notifications: 'Bildirimlerinizi görün!',
            _logout: 'Website oturumunuzu sonlandırın. Ama tekrar sizi bekliyoruz 😊'
        },
        notifications: {
            title: "Senin Bildirimlerin",
            won_part1: "sen kazandın",
            won_part2: "çekilişi!",
            won_part3: "Ödülünüz burada:",
            won_part4: "Ödül geçersizse, çekiliş sahibiyle iletişime geçin.",
            no_notifications: "Henüz bildirim yok.",
       },
       connections: {
        title: 'Bağlantılar',
        description: 'GiveAways'ta olan bağlantılarınızı yönetin!',
        button: {
            logout: 'çıkış yap',
            connect: '<b>{PROVIDER}</b> olarak bağlan',
            connectMini: 'Bağlanmak için tıklayın',
            logged: '<b>{ACCOUNT}</b> olarak giriş yaptın'
        }
    },
        redeem: {
            title: 'Hediye kodu',
            description: 'Hediye kodu ile hediye kazanın!',
            inputPlaceholder: 'Hediye kodunuz burada',
            button: 'Hediye kodu',
            didntWork: 'Kod çalışmadı mı?',
            success: '🎉 Tebrikler! Hesabınıza {COUNT} coin ekledik!'
        }
    },
    dashboard: {
        managing: 'Şunları yönetiyorsunuz:',
        pages: 'Siteler',
        more: 'Daha',
        not_autorized_message: 'Bu sunucuyu yönetmek için yönetici yetkiniz yoktur.',
        selectServer: {
            title: 'Sunucu seç',
            description: 'Sunucunu bulamadın mı? tekrar <u>giriş</u> yap!',
            serverUnderText: 'Sunucuya tıklayın',
            buttons: {
                manage: 'Yönet',
                add: 'Botu davet et'
            }
        },
        settings: {
            free: 'Bedava',
            soon: 'ÇOK YAKINDA',
            _soon: 'Sadece son güçlendirme seviyesine ulaşanlar kullanabilir.',
            embed_editor_title: 'Embed Düzenleyici',
            bot_name: 'GiveAways',
            bot_label: 'bot',
            today_at: 'Bugün',
            youcan: 'İtalik ve düşük opaklığa sahip alanlara metin ekleyebilirsiniz. Üzerine tıklayarak istediğiniz metni düzenleyebilirsiniz. (Gerekli alanlar düzenlenlenemez!)
            reset: 'Sıfırla',
            save: 'Kaydet',
            logs_title: 'Kayıt',
            logs_desc: 'Bir Discord Kanalına Kayıt Gönderin',
            enabled: 'Kapalı',
            disabled: 'Açık',
            log_channel_title: 'Kayıt Kanalı'
          },
          allgiveaways: {
              create_button_title: 'Oluştur',
              title_label: 'başlık',
              prize_label: 'Ödül',
              total_winners_label: 'Toplam Kazanan sayısı',
              status_title: 'Durum',
              total_participants: 'Toplam Katılımcı',
              pin_label: 'Pin Kodu',
              actions_label: 'Hareketler'
          },
        stats: {
            total: 'Toplam çekilişler',
            active: 'Aktif olan çekilişler',
            activeTippy: 'Limiti artırmak için artırın!',
            ended: 'Deaktif olan çekilişler',
            participants: 'Katılan sayısı'
        },
        sidebar: {
            dashboard: 'Kontrol Paneli',
            create: 'Çekiliş Oluştur',
            active: 'Aktif Çekilişler',
            ended: 'Deaktif Çekilişler',
            all: 'Bütün çekilişler',
            boost: 'Boostlar',
            settings: 'Ayarlar'
        },
        auditLog: {
            title: 'Denetim kaydı',
            description: 'Bu sunucuda GiveAways/'da yapılan değişikliklerin denetim kayıtları bu bölümde görülebilir.',
            table: {
                user: 'Kullanıcı',
                date: 'Tarih',
                action: 'Eylem',
                message: 'Mesaj'
            },
            boost: 'GiveAways boost ile sunucuyu yükseltti.',
            unboost: 'GiveAways boost ile Sunucunun yükseltmesi kaldırıldı.',
            giveaway_delete: 'Çekiliş silindi.',
            giveaway_create: 'Çekiliş sonlandırıldı.',
            giveaway_finish: 'Çekiliş bitirildi.',
            giveaway_join: 'Çekilişe katıldı.',
            giveawaY_reroll: 'Çekilişten çıktı.'
        },
    },
};
