import React from 'react';
import { PathProps } from 'react-native-svg';

const constituencies: {
  [key: string]: {
    default: React.ComponentClass<{
      width: number;
      height: number;
      childProps?: PathProps;
    }>;
  };
} = {
  '1': require('./constituencies/1.tsx'),
  '10': require('./constituencies/10.tsx'),
  '100': require('./constituencies/100.tsx'),
  '101': require('./constituencies/101.tsx'),
  '102': require('./constituencies/102.tsx'),
  '103': require('./constituencies/103.tsx'),
  '104': require('./constituencies/104.tsx'),
  '105': require('./constituencies/105.tsx'),
  '106': require('./constituencies/106.tsx'),
  '107': require('./constituencies/107.tsx'),
  '108': require('./constituencies/108.tsx'),
  '109': require('./constituencies/109.tsx'),
  '11': require('./constituencies/11.tsx'),
  '110': require('./constituencies/110.tsx'),
  '111': require('./constituencies/111.tsx'),
  '112': require('./constituencies/112.tsx'),
  '113': require('./constituencies/113.tsx'),
  '114': require('./constituencies/114.tsx'),
  '115': require('./constituencies/115.tsx'),
  '116': require('./constituencies/116.tsx'),
  '117': require('./constituencies/117.tsx'),
  '118': require('./constituencies/118.tsx'),
  '119': require('./constituencies/119.tsx'),
  '12': require('./constituencies/12.tsx'),
  '120': require('./constituencies/120.tsx'),
  '121': require('./constituencies/121.tsx'),
  '122': require('./constituencies/122.tsx'),
  '123': require('./constituencies/123.tsx'),
  '124': require('./constituencies/124.tsx'),
  '125': require('./constituencies/125.tsx'),
  '126': require('./constituencies/126.tsx'),
  '127': require('./constituencies/127.tsx'),
  '128': require('./constituencies/128.tsx'),
  '129': require('./constituencies/129.tsx'),
  '13': require('./constituencies/13.tsx'),
  '130': require('./constituencies/130.tsx'),
  '131': require('./constituencies/131.tsx'),
  '132': require('./constituencies/132.tsx'),
  '133': require('./constituencies/133.tsx'),
  '134': require('./constituencies/134.tsx'),
  '135': require('./constituencies/135.tsx'),
  '136': require('./constituencies/136.tsx'),
  '137': require('./constituencies/137.tsx'),
  '138': require('./constituencies/138.tsx'),
  '139': require('./constituencies/139.tsx'),
  '14': require('./constituencies/14.tsx'),
  '140': require('./constituencies/140.tsx'),
  '141': require('./constituencies/141.tsx'),
  '142': require('./constituencies/142.tsx'),
  '143': require('./constituencies/143.tsx'),
  '144': require('./constituencies/144.tsx'),
  '145': require('./constituencies/145.tsx'),
  '146': require('./constituencies/146.tsx'),
  '147': require('./constituencies/147.tsx'),
  '148': require('./constituencies/148.tsx'),
  '149': require('./constituencies/149.tsx'),
  '15': require('./constituencies/15.tsx'),
  '150': require('./constituencies/150.tsx'),
  '151': require('./constituencies/151.tsx'),
  '152': require('./constituencies/152.tsx'),
  '153': require('./constituencies/153.tsx'),
  '154': require('./constituencies/154.tsx'),
  '155': require('./constituencies/155.tsx'),
  '156': require('./constituencies/156.tsx'),
  '157': require('./constituencies/157.tsx'),
  '158': require('./constituencies/158.tsx'),
  '159': require('./constituencies/159.tsx'),
  '16': require('./constituencies/16.tsx'),
  '160': require('./constituencies/160.tsx'),
  '161': require('./constituencies/161.tsx'),
  '162': require('./constituencies/162.tsx'),
  '163': require('./constituencies/163.tsx'),
  '164': require('./constituencies/164.tsx'),
  '165': require('./constituencies/165.tsx'),
  '166': require('./constituencies/166.tsx'),
  '167': require('./constituencies/167.tsx'),
  '168': require('./constituencies/168.tsx'),
  '169': require('./constituencies/169.tsx'),
  '17': require('./constituencies/17.tsx'),
  '170': require('./constituencies/170.tsx'),
  '171': require('./constituencies/171.tsx'),
  '172': require('./constituencies/172.tsx'),
  '173': require('./constituencies/173.tsx'),
  '174': require('./constituencies/174.tsx'),
  '175': require('./constituencies/175.tsx'),
  '176': require('./constituencies/176.tsx'),
  '177': require('./constituencies/177.tsx'),
  '178': require('./constituencies/178.tsx'),
  '179': require('./constituencies/179.tsx'),
  '18': require('./constituencies/18.tsx'),
  '180': require('./constituencies/180.tsx'),
  '181': require('./constituencies/181.tsx'),
  '182': require('./constituencies/182.tsx'),
  '183': require('./constituencies/183.tsx'),
  '184': require('./constituencies/184.tsx'),
  '185': require('./constituencies/185.tsx'),
  '186': require('./constituencies/186.tsx'),
  '187': require('./constituencies/187.tsx'),
  '188': require('./constituencies/188.tsx'),
  '189': require('./constituencies/189.tsx'),
  '19': require('./constituencies/19.tsx'),
  '190': require('./constituencies/190.tsx'),
  '191': require('./constituencies/191.tsx'),
  '192': require('./constituencies/192.tsx'),
  '193': require('./constituencies/193.tsx'),
  '194': require('./constituencies/194.tsx'),
  '195': require('./constituencies/195.tsx'),
  '196': require('./constituencies/196.tsx'),
  '197': require('./constituencies/197.tsx'),
  '198': require('./constituencies/198.tsx'),
  '199': require('./constituencies/199.tsx'),
  '2': require('./constituencies/2.tsx'),
  '20': require('./constituencies/20.tsx'),
  '200': require('./constituencies/200.tsx'),
  '201': require('./constituencies/201.tsx'),
  '202': require('./constituencies/202.tsx'),
  '203': require('./constituencies/203.tsx'),
  '204': require('./constituencies/204.tsx'),
  '205': require('./constituencies/205.tsx'),
  '206': require('./constituencies/206.tsx'),
  '207': require('./constituencies/207.tsx'),
  '208': require('./constituencies/208.tsx'),
  '209': require('./constituencies/209.tsx'),
  '21': require('./constituencies/21.tsx'),
  '210': require('./constituencies/210.tsx'),
  '211': require('./constituencies/211.tsx'),
  '212': require('./constituencies/212.tsx'),
  '213': require('./constituencies/213.tsx'),
  '214': require('./constituencies/214.tsx'),
  '215': require('./constituencies/215.tsx'),
  '216': require('./constituencies/216.tsx'),
  '217': require('./constituencies/217.tsx'),
  '218': require('./constituencies/218.tsx'),
  '219': require('./constituencies/219.tsx'),
  '22': require('./constituencies/22.tsx'),
  '220': require('./constituencies/220.tsx'),
  '221': require('./constituencies/221.tsx'),
  '222': require('./constituencies/222.tsx'),
  '223': require('./constituencies/223.tsx'),
  '224': require('./constituencies/224.tsx'),
  '225': require('./constituencies/225.tsx'),
  '226': require('./constituencies/226.tsx'),
  '227': require('./constituencies/227.tsx'),
  '228': require('./constituencies/228.tsx'),
  '229': require('./constituencies/229.tsx'),
  '23': require('./constituencies/23.tsx'),
  '230': require('./constituencies/230.tsx'),
  '231': require('./constituencies/231.tsx'),
  '232': require('./constituencies/232.tsx'),
  '233': require('./constituencies/233.tsx'),
  '234': require('./constituencies/234.tsx'),
  '235': require('./constituencies/235.tsx'),
  '236': require('./constituencies/236.tsx'),
  '237': require('./constituencies/237.tsx'),
  '238': require('./constituencies/238.tsx'),
  '239': require('./constituencies/239.tsx'),
  '24': require('./constituencies/24.tsx'),
  '240': require('./constituencies/240.tsx'),
  '241': require('./constituencies/241.tsx'),
  '242': require('./constituencies/242.tsx'),
  '243': require('./constituencies/243.tsx'),
  '244': require('./constituencies/244.tsx'),
  '245': require('./constituencies/245.tsx'),
  '246': require('./constituencies/246.tsx'),
  '247': require('./constituencies/247.tsx'),
  '248': require('./constituencies/248.tsx'),
  '249': require('./constituencies/249.tsx'),
  '25': require('./constituencies/25.tsx'),
  '250': require('./constituencies/250.tsx'),
  '251': require('./constituencies/251.tsx'),
  '252': require('./constituencies/252.tsx'),
  '253': require('./constituencies/253.tsx'),
  '254': require('./constituencies/254.tsx'),
  '255': require('./constituencies/255.tsx'),
  '256': require('./constituencies/256.tsx'),
  '257': require('./constituencies/257.tsx'),
  '258': require('./constituencies/258.tsx'),
  '259': require('./constituencies/259.tsx'),
  '26': require('./constituencies/26.tsx'),
  '260': require('./constituencies/260.tsx'),
  '261': require('./constituencies/261.tsx'),
  '262': require('./constituencies/262.tsx'),
  '263': require('./constituencies/263.tsx'),
  '264': require('./constituencies/264.tsx'),
  '265': require('./constituencies/265.tsx'),
  '266': require('./constituencies/266.tsx'),
  '267': require('./constituencies/267.tsx'),
  '268': require('./constituencies/268.tsx'),
  '269': require('./constituencies/269.tsx'),
  '27': require('./constituencies/27.tsx'),
  '270': require('./constituencies/270.tsx'),
  '271': require('./constituencies/271.tsx'),
  '272': require('./constituencies/272.tsx'),
  '273': require('./constituencies/273.tsx'),
  '274': require('./constituencies/274.tsx'),
  '275': require('./constituencies/275.tsx'),
  '276': require('./constituencies/276.tsx'),
  '277': require('./constituencies/277.tsx'),
  '278': require('./constituencies/278.tsx'),
  '279': require('./constituencies/279.tsx'),
  '28': require('./constituencies/28.tsx'),
  '280': require('./constituencies/280.tsx'),
  '281': require('./constituencies/281.tsx'),
  '282': require('./constituencies/282.tsx'),
  '283': require('./constituencies/283.tsx'),
  '284': require('./constituencies/284.tsx'),
  '285': require('./constituencies/285.tsx'),
  '286': require('./constituencies/286.tsx'),
  '287': require('./constituencies/287.tsx'),
  '288': require('./constituencies/288.tsx'),
  '289': require('./constituencies/289.tsx'),
  '29': require('./constituencies/29.tsx'),
  '290': require('./constituencies/290.tsx'),
  '291': require('./constituencies/291.tsx'),
  '292': require('./constituencies/292.tsx'),
  '293': require('./constituencies/293.tsx'),
  '294': require('./constituencies/294.tsx'),
  '295': require('./constituencies/295.tsx'),
  '296': require('./constituencies/296.tsx'),
  '297': require('./constituencies/297.tsx'),
  '298': require('./constituencies/298.tsx'),
  '299': require('./constituencies/299.tsx'),
  '3': require('./constituencies/3.tsx'),
  '30': require('./constituencies/30.tsx'),
  '31': require('./constituencies/31.tsx'),
  '32': require('./constituencies/32.tsx'),
  '33': require('./constituencies/33.tsx'),
  '34': require('./constituencies/34.tsx'),
  '35': require('./constituencies/35.tsx'),
  '36': require('./constituencies/36.tsx'),
  '37': require('./constituencies/37.tsx'),
  '38': require('./constituencies/38.tsx'),
  '39': require('./constituencies/39.tsx'),
  '4': require('./constituencies/4.tsx'),
  '40': require('./constituencies/40.tsx'),
  '41': require('./constituencies/41.tsx'),
  '42': require('./constituencies/42.tsx'),
  '43': require('./constituencies/43.tsx'),
  '44': require('./constituencies/44.tsx'),
  '45': require('./constituencies/45.tsx'),
  '46': require('./constituencies/46.tsx'),
  '47': require('./constituencies/47.tsx'),
  '48': require('./constituencies/48.tsx'),
  '49': require('./constituencies/49.tsx'),
  '5': require('./constituencies/5.tsx'),
  '50': require('./constituencies/50.tsx'),
  '51': require('./constituencies/51.tsx'),
  '52': require('./constituencies/52.tsx'),
  '53': require('./constituencies/53.tsx'),
  '54': require('./constituencies/54.tsx'),
  '55': require('./constituencies/55.tsx'),
  '56': require('./constituencies/56.tsx'),
  '57': require('./constituencies/57.tsx'),
  '58': require('./constituencies/58.tsx'),
  '59': require('./constituencies/59.tsx'),
  '6': require('./constituencies/6.tsx'),
  '60': require('./constituencies/60.tsx'),
  '61': require('./constituencies/61.tsx'),
  '62': require('./constituencies/62.tsx'),
  '63': require('./constituencies/63.tsx'),
  '64': require('./constituencies/64.tsx'),
  '65': require('./constituencies/65.tsx'),
  '66': require('./constituencies/66.tsx'),
  '67': require('./constituencies/67.tsx'),
  '68': require('./constituencies/68.tsx'),
  '69': require('./constituencies/69.tsx'),
  '7': require('./constituencies/7.tsx'),
  '70': require('./constituencies/70.tsx'),
  '71': require('./constituencies/71.tsx'),
  '72': require('./constituencies/72.tsx'),
  '73': require('./constituencies/73.tsx'),
  '74': require('./constituencies/74.tsx'),
  '75': require('./constituencies/75.tsx'),
  '76': require('./constituencies/76.tsx'),
  '77': require('./constituencies/77.tsx'),
  '78': require('./constituencies/78.tsx'),
  '79': require('./constituencies/79.tsx'),
  '8': require('./constituencies/8.tsx'),
  '80': require('./constituencies/80.tsx'),
  '81': require('./constituencies/81.tsx'),
  '82': require('./constituencies/82.tsx'),
  '83': require('./constituencies/83.tsx'),
  '84': require('./constituencies/84.tsx'),
  '85': require('./constituencies/85.tsx'),
  '86': require('./constituencies/86.tsx'),
  '87': require('./constituencies/87.tsx'),
  '88': require('./constituencies/88.tsx'),
  '89': require('./constituencies/89.tsx'),
  '9': require('./constituencies/9.tsx'),
  '90': require('./constituencies/90.tsx'),
  '91': require('./constituencies/91.tsx'),
  '92': require('./constituencies/92.tsx'),
  '93': require('./constituencies/93.tsx'),
  '94': require('./constituencies/94.tsx'),
  '95': require('./constituencies/95.tsx'),
  '96': require('./constituencies/96.tsx'),
  '97': require('./constituencies/97.tsx'),
  '98': require('./constituencies/98.tsx'),
  '99': require('./constituencies/99.tsx'),
};

export default (key: string) => constituencies[key];
