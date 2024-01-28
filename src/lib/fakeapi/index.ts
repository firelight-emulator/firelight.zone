// TEMP until api is implemented

export const platforms: { [id: string]: { id: string; name: string } } = {
	n64: {
		id: 'n64',
		name: 'Nintendo 64',
	},
};

export const games = {
	'a319d4a0-ddac-4750-8f7a-98b9b047a8fe': {
		id: 'a319d4a0-ddac-4750-8f7a-98b9b047a8fe',
		region: 'usa',
		platform: 'n64',
		checksums: {
			crc: 'a7f5cd7e',
			md5: 'a722f8161ff489943191330bf8416496',
			sha1: '3837f44cda784b466c9a2d99df70d77c322b97a0',
			sha256: '9ec6d2a5c2fca81ab86312328779fd042b5f3b920bf65df9f6b87b376883cb5b',
		},
		known_filenames: ['Paper Mario (USA).z64'],
		filesize_bytes: 41943040,
		game_name: 'Paper Mario',
		game_id: '3340',
		slug: 'papermario',
	},
	'b6d997fe-52f7-4b4e-b0fc-6525afcb1fa8': {
		id: 'b6d997fe-52f7-4b4e-b0fc-6525afcb1fa8',
		region: 'usa',
		platform: 'n64',
		checksums: {
			crc: '3ce60709',
			md5: '20b854b239203baf6c961b850a4a51a2',
			sha1: '9bef1128717f958171a4afac3ed78ee2bb4e86ce',
			sha256: '17ce077343c6133f8c9f2d6d6d9a4ab62c8cd2aa57c40aea1f490b4c8bb21d91',
		},
		known_filenames: ['Super Mario 64 (USA).z64'],
		filesize_bytes: 8388608,
		game_name: 'Super Mario 64',
		game_id: '175964',
		slug: 'sm64',
	},
};
