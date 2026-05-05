const elCard = document.createElement('div');
elCard.style.cssText = `
    width: 350px;
    background-color: #ffffff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
    font-family: 'Helvetica', sans-serif;
    margin: 25px;
`;

const elBanner = document.createElement('div');
elBanner.style.cssText = `
    height: 235px;
    background-image: url("https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1000");
    background-size: cover;
    background-position: center;
`;

const elContent = document.createElement('div');
elContent.style.padding = '24px';

const elMeta = document.createElement('div');
elMeta.innerText = 'DETACHED HOUSE • 5Y OLD';
elMeta.style.cssText = 'font-size: 11px; font-weight: 700; color: #546e7a; letter-spacing: 0.8px;';

const elPrice = document.createElement('div');
elPrice.innerText = '$750,000';
elPrice.style.cssText = 'font-size: 28px; font-weight: bold; margin: 12px 0 6px 0; color: #1a1a1a;';

const elLoc = document.createElement('div');
elLoc.innerText = '742 Evergreen Terrace';
elLoc.style.cssText = 'font-size: 15px; color: #a0a0a0; margin-bottom: 25px;';

const elStats = document.createElement('div');
elStats.style.cssText = 'display: flex; gap: 30px; padding-top: 18px; border-top: 1px solid #f5f5f5;';

const bedBox = document.createElement('div');
bedBox.innerHTML = `🛏️ <span style="font-weight:bold">3</span> <small style="color:#999">Beds</small>`;
const bathBox = document.createElement('div');
bathBox.innerHTML = `🛁 <span style="font-weight:bold">2</span> <small style="color:#999">Baths</small>`;

elStats.append(bedBox, bathBox);

const elFooter = document.createElement('div');
elFooter.style.cssText = `
    display: flex;
    align-items: center;
    padding: 18px 24px;
    background-color: #fefefe;
    border-top: 1px solid #f0f0f0;
`;

const elAvatar = document.createElement('img');
elAvatar.src = 'https://i.pravatar.cc/150?u=tiffany';
elAvatar.style.cssText = 'width: 38px; height: 38px; border-radius: 50%; margin-right: 15px;';

const elAgentInfo = document.createElement('div');
elAgentInfo.innerHTML = `
    <div style="font-weight:700; font-size:14px; color:#333">Tiffany Heffner</div>
    <div style="color:#bbb; font-size:12px">(555) 555-4321</div>
`;

elFooter.append(elAvatar, elAgentInfo);
elContent.append(elMeta, elPrice, elLoc, elStats);
elCard.append(elBanner, elContent, elFooter);

document.body.appendChild(elCard);