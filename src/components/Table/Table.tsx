import React from 'react';
import styles from './Table.module.css';

export function Table() {
  return (
    <svg viewBox="0 0 700 2000" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="700" height="2000" fill="#216B63" />
      <g className={styles.tableText}>
        <path d="M177.76 47.8336L187.123 28.6705L193.388 31.7315C195.467 32.7475 196.819 33.9405 197.443 35.3106C198.076 36.6849 197.981 38.2144 197.158 39.8991C196.72 40.794 196.078 41.4638 195.23 41.9083C194.387 42.3441 193.435 42.5362 192.373 42.4848C193.267 43.2803 193.813 44.2317 194.011 45.3393C194.222 46.4423 194.053 47.5554 193.504 48.6785C192.664 50.3983 191.446 51.4773 189.852 51.9155C188.257 52.3538 186.442 52.0757 184.407 51.0811L177.76 47.8336ZM184.666 40.1053L181.297 47.0019L185.469 49.0404C186.645 49.6149 187.718 49.7645 188.69 49.4891C189.674 49.2093 190.428 48.5342 190.951 47.4637C192.078 45.1561 191.387 43.3892 188.878 42.1631L184.666 40.1053ZM185.657 38.0785L189.473 39.9433C190.579 40.4835 191.596 40.6379 192.524 40.4067C193.461 40.1797 194.161 39.5924 194.624 38.6448C195.138 37.5919 195.204 36.6785 194.822 35.9046C194.443 35.1219 193.627 34.424 192.372 33.811L188.634 31.9847L185.657 38.0785Z" fill="white" />
        <path d="M198.753 55.3901L207.931 59.6226L206.968 61.711L195.222 56.2946L204.154 36.9266L206.721 38.1104L198.753 55.3901Z" fill="white" />
        <path d="M223.512 62.8247L215.299 59.3041L211.262 63.6296L208.596 62.4868L224.485 46.0928L226.747 47.0624L225.843 69.88L223.19 68.7431L223.512 62.8247ZM216.992 57.5116L223.657 60.3685L224.248 49.7685L216.992 57.5116Z" fill="white" />
        <path d="M245.891 70.4594C244.829 72.467 243.42 73.7898 241.663 74.428C239.92 75.0605 237.965 74.9563 235.798 74.1151C233.449 73.2033 231.892 71.6297 231.125 69.3941C230.368 67.1622 230.537 64.6351 231.633 61.813L232.375 59.9012C233.092 58.0531 234.051 56.5554 235.251 55.4078C236.46 54.2639 237.814 53.5537 239.315 53.2772C240.819 52.9916 242.368 53.1581 243.961 53.7766C246.073 54.5965 247.536 55.8456 248.351 57.5238C249.17 59.193 249.279 61.1106 248.68 63.2766L246.044 62.2535C246.431 60.5811 246.38 59.2414 245.891 58.2345C245.411 57.231 244.489 56.4643 243.123 55.9341C241.448 55.2839 239.892 55.3922 238.456 56.2592C237.028 57.1298 235.871 58.7076 234.984 60.9926L234.237 62.918C233.399 65.0756 233.183 66.9666 233.59 68.591C233.996 70.2154 235.01 71.3421 236.63 71.9712C238.087 72.5367 239.329 72.6419 240.358 72.2868C241.399 71.9262 242.364 70.976 243.256 69.4363L245.891 70.4594Z" fill="white" />
        <path d="M256.86 70.9905L253.517 72.7139L251.191 79.5352L248.529 78.6275L255.413 58.4408L258.075 59.3485L254.671 69.3309L267.045 62.4074L270.262 63.5043L259.277 69.7101L264.002 83.9037L260.813 82.8163L256.86 70.9905Z" fill="white" />
        <path d="M281.799 66.9045L284.512 67.6973L280.277 82.1938C279.705 84.153 278.667 85.513 277.162 86.2741C275.667 87.0379 273.94 87.1336 271.981 86.5612C269.947 85.9669 268.515 84.9838 267.685 83.612C266.855 82.2401 266.713 80.6168 267.261 78.7421L269.961 79.5308C269.618 80.7025 269.67 81.7095 270.116 82.5519C270.571 83.3971 271.408 83.9976 272.626 84.3537C273.742 84.6796 274.744 84.591 275.634 84.0878C276.533 83.5875 277.172 82.7059 277.551 81.4432L281.799 66.9045Z" fill="white" />
        <path d="M296.53 86.9213L287.835 84.8646L284.601 89.8197L281.778 89.1521L294.613 70.2712L297.008 70.8377L300.039 93.4712L297.231 92.8069L296.53 86.9213ZM289.194 82.8079L296.251 84.4768L295.011 73.9329L289.194 82.8079Z" fill="white" />
        <path d="M321.447 90.3201C320.814 92.5015 319.703 94.0828 318.113 95.0642C316.534 96.0376 314.598 96.3323 312.306 95.9486C309.821 95.5325 307.977 94.3078 306.772 92.2744C305.578 90.2426 305.23 87.7338 305.73 84.748L306.069 82.7254C306.396 80.7702 307.031 79.109 307.973 77.7419C308.924 76.3763 310.106 75.4059 311.52 74.8306C312.935 74.2456 314.485 74.0942 316.17 74.3764C318.405 74.7505 320.091 75.6765 321.23 77.1544C322.371 78.6226 322.867 80.4781 322.719 82.7208L319.931 82.254C319.971 80.5378 319.649 79.2363 318.966 78.3496C318.292 77.4645 317.233 76.901 315.788 76.6591C314.016 76.3624 312.514 76.7843 311.284 77.9249C310.063 79.0671 309.25 80.847 308.845 83.2645L308.504 85.3016C308.122 87.5842 308.295 89.4796 309.023 90.9877C309.75 92.4957 310.971 93.3933 312.686 93.6803C314.227 93.9383 315.465 93.7891 316.4 93.2327C317.346 92.6683 318.099 91.5418 318.659 89.8533L321.447 90.3201Z" fill="white" />
        <path d="M330.396 88.1253L327.538 90.5692L326.838 97.7422L324.039 97.4691L326.11 76.2418L328.909 76.5149L327.885 87.0119L338.342 77.4354L341.725 77.7654L332.456 86.3247L340.309 99.0567L336.956 98.7295L330.396 88.1253Z" fill="white" />
        <path d="M355.268 91.1498L355.354 99.4989L352.542 99.528L352.322 78.201L360.187 78.1197C362.521 78.0956 364.353 78.6724 365.684 79.8501C367.024 81.0277 367.705 82.5979 367.725 84.5607C367.746 86.6309 367.114 88.2342 365.826 89.3706C364.549 90.4972 362.704 91.0729 360.292 91.0978L355.268 91.1498ZM355.244 88.8501L360.298 88.7978C361.802 88.7823 362.95 88.4188 363.744 87.7075C364.537 86.9863 364.927 85.9569 364.913 84.6191C364.9 83.3496 364.489 82.3382 363.68 81.5848C362.872 80.8314 361.769 80.4472 360.372 80.4324L355.158 80.4863L355.244 88.8501Z" fill="white" />
        <path d="M375.927 96.4931L385.998 95.6365L386.193 97.9281L373.305 99.0242L371.498 77.7728L374.314 77.5332L375.927 96.4931Z" fill="white" />
        <path d="M401.342 90.0413L392.519 91.4498L391.414 97.2629L388.55 97.7201L393.231 75.3748L395.661 74.9869L407.08 94.7622L404.23 95.2171L401.342 90.0413ZM392.993 89.0303L400.153 87.8874L394.993 78.6091L392.993 89.0303Z" fill="white" />
        <path d="M415.426 81.9417L418.381 70.2407L421.489 69.5065L417.408 84.213L419.236 91.954L416.499 92.6006L414.67 84.8596L404.439 73.5346L407.575 72.7936L415.426 81.9417Z" fill="white" />
        <path d="M433.111 78.3331C430.601 78.37 428.673 78.0674 427.324 77.4253C425.983 76.7711 425.097 75.7337 424.666 74.3133C424.178 72.706 424.415 71.1848 425.378 69.7497C426.347 68.3024 427.86 67.2668 429.916 66.643C431.317 66.2176 432.647 66.1101 433.905 66.3203C435.172 66.5277 436.249 67.0173 437.137 67.789C438.033 68.5578 438.653 69.5076 438.996 70.6383L436.291 71.4593C435.917 70.2257 435.231 69.3776 434.233 68.915C433.233 68.4429 432.017 68.4239 430.588 68.8577C429.261 69.2604 428.313 69.8695 427.744 70.6851C427.181 71.4885 427.058 72.4088 427.372 73.4461C427.625 74.2778 428.189 74.877 429.066 75.2437C429.949 75.5982 431.309 75.7572 433.145 75.7205C434.99 75.681 436.477 75.8063 437.606 76.0965C438.742 76.3744 439.655 76.8271 440.345 77.4544C441.045 78.0789 441.552 78.9098 441.867 79.9471C442.369 81.6011 442.127 83.1238 441.14 84.515C440.151 85.8969 438.578 86.9153 436.419 87.5703C435.017 87.9957 433.628 88.1263 432.252 87.9623C430.872 87.7889 429.709 87.3357 428.762 86.6025C427.824 85.8665 427.176 84.9051 426.815 83.7183L429.521 82.8974C429.895 84.1309 430.645 84.97 431.769 85.4145C432.901 85.8468 434.228 85.8318 435.751 85.3696C437.172 84.9386 438.172 84.3186 438.753 83.5095C439.335 82.7004 439.473 81.7959 439.17 80.796C438.867 79.7961 438.282 79.1315 437.417 78.8022C436.549 78.4635 435.113 78.3072 433.111 78.3331Z" fill="white" />
        <path d="M454.38 68.4612L456.278 67.7234C457.463 67.2415 458.279 66.563 458.724 65.6878C459.17 64.8125 459.191 63.8561 458.787 62.8185C457.882 60.4884 456.268 59.7746 453.947 60.677C452.855 61.1017 452.103 61.7555 451.692 62.6383C451.286 63.5085 451.284 64.4578 451.684 65.4863L449.158 66.4684C448.546 64.8938 448.611 63.3647 449.354 61.8812C450.103 60.385 451.365 59.2919 453.14 58.6018C455.015 57.8728 456.678 57.7973 458.129 58.3754C459.579 58.9534 460.648 60.1253 461.334 61.8911C461.671 62.7557 461.714 63.7028 461.465 64.7323C461.225 65.7582 460.7 66.659 459.891 67.4346C461.117 67.3558 462.182 67.6019 463.085 68.1728C463.998 68.7402 464.678 69.6018 465.128 70.7578C465.821 72.5417 465.789 74.1836 465.031 75.6833C464.273 77.183 462.961 78.2955 461.095 79.021C459.229 79.7465 457.513 79.8324 455.946 79.2786C454.388 78.7213 453.287 77.6143 452.643 75.9578L455.182 74.9704C455.589 76.0172 456.256 76.7218 457.183 77.0844C458.11 77.447 459.147 77.4054 460.294 76.9595C461.513 76.4852 462.322 75.8039 462.721 74.9155C463.119 74.0272 463.087 72.9868 462.623 71.7944C462.174 70.6385 461.474 69.8891 460.523 69.5462C459.573 69.2033 458.425 69.2829 457.08 69.7849L455.182 70.5228L454.38 68.4612Z" fill="white" />
        <path d="M484.183 47.9792L477.957 50.8493L485.918 68.1164L483.377 69.2878L475.417 52.0206L469.204 54.8845L468.235 52.7827L483.214 45.8773L484.183 47.9792Z" fill="white" />
        <path d="M504.865 47.658C505.812 49.521 506.326 51.3082 506.407 53.0197C506.484 54.7225 506.134 56.2316 505.356 57.5469C504.579 58.8623 503.424 59.9094 501.892 60.6882C500.395 61.4493 498.881 61.7585 497.352 61.6158C495.818 61.4643 494.383 60.8733 493.049 59.8427C491.719 58.7989 490.589 57.3848 489.66 55.6003L488.963 54.2292C488.034 52.401 487.531 50.6246 487.454 48.9C487.377 47.1754 487.729 45.6488 488.511 44.3203C489.297 42.9787 490.439 41.9273 491.936 41.1662C493.459 40.3919 494.988 40.0804 496.522 40.2318C498.06 40.3701 499.499 40.9808 500.838 42.0638C502.173 43.1381 503.312 44.6023 504.254 46.4566L504.865 47.658ZM501.747 47.6983C500.601 45.4435 499.27 43.9456 497.754 43.2044C496.233 42.4546 494.659 42.4934 493.031 43.3209C491.447 44.1262 490.505 45.3662 490.206 47.0409C489.911 48.7025 490.295 50.6107 491.358 52.7655L492.068 54.1628C493.179 56.3479 494.51 57.8349 496.061 58.6239C497.616 59.3997 499.199 59.3783 500.81 58.5597C502.429 57.7366 503.384 56.5118 503.675 54.8852C503.961 53.2499 503.557 51.3244 502.464 49.1086L501.747 47.6983Z" fill="white" />
        <path d="M533.807 43.0079L521.651 49.9009L520.69 48.2062L523.066 37.4288C523.406 35.8105 523.564 34.5646 523.54 33.6912C523.52 32.8044 523.305 32 522.896 31.278C522.346 30.3095 521.603 29.6814 520.665 29.3937C519.727 29.1059 518.77 29.239 517.793 29.7929C516.621 30.4577 515.898 31.311 515.624 32.353C515.354 33.3817 515.557 34.4907 516.231 35.68L513.874 37.0167C512.905 35.3092 512.671 33.6181 513.169 31.9433C513.676 30.2638 514.851 28.9013 516.695 27.8561C518.419 26.8782 520.04 26.5596 521.558 26.9002C523.071 27.2322 524.254 28.1501 525.107 29.6537C526.142 31.4801 526.212 34.3148 525.315 38.1576L523.401 46.3656L532.716 41.0838L533.807 43.0079Z" fill="white" />
        <path d="M142.085 77.6129L148.431 64.8887L152.023 66.6799C153.13 67.232 153.987 67.9648 154.593 68.8784C155.2 69.792 155.508 70.8151 155.518 71.9477C155.534 73.0832 155.252 74.2379 154.674 75.4118L154.269 76.2246C153.67 77.4247 152.913 78.3601 151.996 79.0307C151.086 79.7042 150.079 80.0678 148.975 80.1213C147.878 80.1778 146.755 79.9271 145.607 79.3692L142.085 77.6129ZM149.42 67.1062L144.448 77.0776L146.213 77.958C147.506 78.603 148.712 78.7022 149.829 78.2556C150.953 77.8119 151.885 76.8472 152.626 75.3615L152.996 74.6187C153.717 73.1738 153.935 71.8823 153.652 70.7442C153.377 69.6032 152.619 68.7159 151.378 68.0825L149.42 67.1062Z" fill="white" />
        <path d="M158.545 85.9344C157.255 85.3119 156.409 84.3833 156.007 83.1485C155.608 81.9078 155.751 80.578 156.436 79.1591L156.58 78.86C157.036 77.916 157.62 77.1609 158.335 76.5947C159.058 76.0255 159.842 75.6883 160.688 75.5832C161.542 75.4751 162.348 75.6035 163.104 75.9685C164.341 76.5655 165.106 77.437 165.399 78.5831C165.692 79.7292 165.472 81.0615 164.739 82.5801L164.412 83.2574L157.965 80.1465C157.536 81.096 157.442 81.9869 157.684 82.8192C157.935 83.6484 158.464 84.2583 159.273 84.6487C159.848 84.926 160.391 85.0436 160.903 85.0014C161.415 84.9593 161.914 84.8169 162.4 84.5742L163.02 85.8277C161.631 86.6684 160.14 86.7039 158.545 85.9344ZM162.459 77.3054C161.802 76.9885 161.135 76.963 160.458 77.2287C159.783 77.4886 159.185 78.0241 158.663 78.8351L163.43 81.1354L163.49 81.0122C163.842 80.1628 163.927 79.4162 163.746 78.7723C163.568 78.1226 163.139 77.6336 162.459 77.3054Z" fill="white" />
        <path d="M171.261 91.7286C171.255 91.4957 171.335 91.1237 171.502 90.6124C170.372 91.0475 169.279 91.0185 168.223 90.5254C167.279 90.0846 166.627 89.4569 166.268 88.6423C165.917 87.8245 165.933 87.0056 166.316 86.1857C166.781 85.1888 167.52 84.5923 168.531 84.3963C169.551 84.1972 170.748 84.4186 172.122 85.0605L173.715 85.8042L174.066 85.0521C174.333 84.4799 174.375 83.9458 174.189 83.4498C174.007 82.9479 173.583 82.5413 172.916 82.23C172.332 81.9573 171.774 81.8761 171.241 81.9865C170.708 82.0969 170.343 82.3615 170.148 82.7803L168.502 82.0117C168.725 81.5339 169.108 81.1523 169.651 80.8669C170.202 80.5784 170.828 80.4393 171.527 80.4497C172.232 80.4629 172.933 80.632 173.629 80.9571C174.732 81.4722 175.467 82.1531 175.833 82.9996C176.202 83.8402 176.173 84.7497 175.745 85.7281L173.687 90.1346C173.276 91.0135 173.062 91.7649 173.044 92.3886L172.977 92.5302L171.261 91.7286ZM169.127 89.2124C169.64 89.452 170.189 89.5466 170.773 89.496C171.357 89.4454 171.852 89.256 172.256 88.9277L173.174 86.9634L171.891 86.3642C169.885 85.4276 168.608 85.5462 168.06 86.7201C167.82 87.2333 167.804 87.7143 168.011 88.1631C168.218 88.6119 168.59 88.9617 169.127 89.2124Z" fill="white" />
        <path d="M177.423 94.5425L175.778 93.7952L181.982 80.1383L183.627 80.8855L177.423 94.5425Z" fill="white" />
        <path d="M184.231 97.7984C182.921 97.2184 182.046 96.3179 181.604 95.0968C181.165 93.8699 181.264 92.5361 181.902 91.0955L182.037 90.792C182.461 89.8336 183.021 89.0598 183.716 88.4706C184.42 87.878 185.193 87.5155 186.035 87.3828C186.886 87.2469 187.695 87.349 188.463 87.6891C189.719 88.2454 190.512 89.0914 190.842 90.2273C191.172 91.3632 190.995 92.702 190.313 94.2438L190.008 94.9313L183.463 92.0325C183.065 92.9955 183 93.889 183.269 94.7129C183.547 95.5336 184.096 96.1258 184.917 96.4897C185.501 96.748 186.048 96.8478 186.558 96.789C187.068 96.7302 187.562 96.5715 188.04 96.3131L188.701 97.5458C187.34 98.4313 185.85 98.5155 184.231 97.7984ZM187.862 89.0463C187.195 88.751 186.527 88.7472 185.859 89.035C185.193 89.3168 184.612 89.8715 184.118 90.6991L188.957 92.8425L189.013 92.7175C189.337 91.8571 189.398 91.108 189.196 90.4704C188.997 89.8268 188.552 89.3521 187.862 89.0463Z" fill="white" />
        <path d="M199.021 94.2285C198.787 94.0792 198.524 93.9419 198.23 93.8166C197.141 93.3512 196.203 93.4994 195.418 94.2612L192.472 101.158L190.81 100.449L194.961 90.7316L196.577 91.422L196.125 92.5561C197.04 91.9207 197.998 91.8165 198.998 92.2435C199.321 92.3816 199.549 92.5284 199.681 92.6838L199.021 94.2285Z" fill="white" />
        <path d="M206.805 95.7058L206.417 96.8128C207.474 96.2521 208.614 96.2147 209.836 96.7006C211.209 97.2467 211.934 98.1447 212.012 99.3946C212.526 99.0526 213.101 98.8399 213.737 98.7564C214.379 98.6753 215.056 98.7766 215.77 99.0605C217.924 99.9169 218.566 101.493 217.695 103.788L215.079 110.367L213.4 109.699L215.976 103.22C216.256 102.518 216.303 101.931 216.12 101.459C215.939 100.981 215.47 100.591 214.714 100.29C214.091 100.043 213.499 100.024 212.938 100.236C212.38 100.441 211.943 100.845 211.626 101.448L209.035 107.964L207.347 107.293L209.906 100.859C210.473 99.431 210.059 98.4393 208.661 97.8836C207.56 97.4458 206.62 97.6151 205.842 98.3917L202.992 105.561L201.313 104.893L205.217 95.0744L206.805 95.7058Z" fill="white" />
        <path d="M225.493 113.064C224.549 113.598 223.438 113.632 222.16 113.164C221.102 112.777 220.407 112.176 220.074 111.361C219.75 110.543 219.805 109.53 220.24 108.323L222.602 101.867L224.299 102.488L221.953 108.898C221.403 110.402 221.739 111.378 222.962 111.825C224.258 112.3 225.297 112.132 226.078 111.323L228.719 104.105L230.416 104.726L226.785 114.649L225.171 114.058L225.493 113.064Z" fill="white" />
        <path d="M238.017 115.541C238.174 115.079 238.119 114.662 237.854 114.29C237.596 113.913 237.065 113.485 236.258 113.005C235.458 112.527 234.846 112.072 234.422 111.64C234.004 111.209 233.733 110.773 233.608 110.332C233.489 109.893 233.513 109.426 233.68 108.933C233.959 108.113 234.539 107.537 235.422 107.204C236.311 106.874 237.295 106.891 238.374 107.258C239.509 107.643 240.328 108.247 240.832 109.072C241.342 109.898 241.442 110.767 241.132 111.68L239.412 111.096C239.571 110.627 239.508 110.155 239.223 109.68C238.943 109.207 238.501 108.868 237.897 108.663C237.274 108.452 236.741 108.422 236.298 108.574C235.854 108.726 235.558 109.021 235.41 109.459C235.27 109.872 235.327 110.238 235.583 110.559C235.838 110.879 236.359 111.28 237.145 111.76C237.937 112.242 238.553 112.705 238.993 113.15C239.434 113.595 239.716 114.049 239.841 114.511C239.975 114.968 239.95 115.465 239.768 116.002C239.465 116.896 238.863 117.492 237.964 117.792C237.067 118.086 236.048 118.039 234.908 117.652C234.106 117.38 233.445 116.997 232.925 116.504C232.405 116.012 232.055 115.453 231.875 114.828C231.704 114.199 231.718 113.589 231.919 112.997L233.63 113.578C233.466 114.161 233.539 114.695 233.85 115.179C234.168 115.658 234.679 116.017 235.382 116.256C236.029 116.475 236.591 116.522 237.067 116.395C237.552 116.263 237.868 115.979 238.017 115.541Z" fill="white" />
        <path d="M246.654 107.486L245.875 109.924L247.755 110.524L247.33 111.854L245.451 111.254L243.457 117.496C243.328 117.899 243.315 118.23 243.417 118.488C243.521 118.74 243.774 118.93 244.177 119.059C244.376 119.122 244.661 119.172 245.032 119.209L244.586 120.604C244.094 120.584 243.634 120.505 243.206 120.368C242.437 120.123 241.931 119.705 241.689 119.115C241.447 118.525 241.462 117.802 241.736 116.946L243.73 110.704L241.897 110.119L242.322 108.789L244.154 109.374L244.933 106.937L246.654 107.486Z" fill="white" />
        <path d="M260.104 122.263C260.237 121.793 260.161 121.38 259.877 121.022C259.6 120.659 259.047 120.259 258.217 119.822C257.393 119.386 256.758 118.963 256.312 118.553C255.873 118.144 255.58 117.723 255.432 117.289C255.29 116.856 255.29 116.39 255.432 115.888C255.667 115.055 256.217 114.45 257.082 114.072C257.953 113.695 258.937 113.662 260.033 113.972C261.186 114.298 262.035 114.859 262.581 115.657C263.133 116.455 263.278 117.318 263.016 118.246L261.268 117.751C261.403 117.275 261.315 116.807 261.005 116.348C260.702 115.89 260.243 115.574 259.629 115.4C258.996 115.222 258.462 115.22 258.027 115.394C257.592 115.569 257.312 115.879 257.186 116.323C257.068 116.743 257.144 117.107 257.416 117.413C257.688 117.72 258.228 118.093 259.038 118.532C259.854 118.972 260.493 119.403 260.956 119.825C261.419 120.247 261.724 120.685 261.873 121.14C262.03 121.59 262.031 122.088 261.877 122.633C261.62 123.541 261.051 124.168 260.168 124.514C259.287 124.854 258.267 124.859 257.108 124.532C256.294 124.302 255.614 123.954 255.069 123.488C254.524 123.023 254.146 122.483 253.934 121.869C253.73 121.249 253.713 120.639 253.883 120.038L255.622 120.529C255.488 121.121 255.589 121.65 255.924 122.117C256.267 122.579 256.795 122.911 257.51 123.113C258.167 123.299 258.731 123.316 259.2 123.164C259.677 123.008 259.978 122.708 260.104 122.263Z" fill="white" />
        <path d="M269.522 114.082L268.883 116.559L270.793 117.052L270.444 118.404L268.534 117.911L266.896 124.256C266.79 124.666 266.796 124.996 266.912 125.248C267.03 125.494 267.294 125.67 267.704 125.776C267.906 125.828 268.193 125.861 268.565 125.877L268.199 127.295C267.707 127.302 267.243 127.25 266.808 127.138C266.026 126.936 265.498 126.547 265.223 125.972C264.948 125.397 264.922 124.674 265.147 123.804L266.785 117.46L264.922 116.979L265.271 115.627L267.134 116.107L267.773 113.63L269.522 114.082Z" fill="white" />
        <path d="M278.057 129.645C278.003 129.418 278.005 129.038 278.062 128.503C277.047 129.162 275.971 129.36 274.836 129.096C273.822 128.859 273.054 128.38 272.534 127.657C272.022 126.93 271.868 126.125 272.073 125.244C272.323 124.172 272.922 123.436 273.871 123.035C274.827 122.63 276.045 122.599 277.522 122.943L279.234 123.341L279.422 122.533C279.565 121.918 279.495 121.387 279.212 120.94C278.929 120.486 278.43 120.176 277.714 120.009C277.086 119.863 276.523 119.899 276.024 120.117C275.525 120.336 275.224 120.67 275.119 121.12L273.35 120.708C273.469 120.194 273.765 119.742 274.237 119.351C274.717 118.954 275.3 118.689 275.987 118.555C276.679 118.422 277.4 118.442 278.148 118.617C279.334 118.893 280.193 119.407 280.727 120.159C281.262 120.906 281.421 121.802 281.204 122.847L280.101 127.584C279.881 128.529 279.827 129.308 279.938 129.922L279.903 130.075L278.057 129.645ZM275.45 127.624C276.001 127.753 276.558 127.732 277.119 127.561C277.68 127.391 278.124 127.104 278.452 126.699L278.944 124.587L277.565 124.266C275.409 123.764 274.184 124.144 273.89 125.406C273.762 125.958 273.845 126.432 274.141 126.828C274.436 127.224 274.873 127.49 275.45 127.624Z" fill="white" />
        <path d="M286.046 120.548L285.842 121.861C286.833 121.025 287.967 120.735 289.244 120.991C291.433 121.431 292.289 122.888 291.812 125.362L290.437 132.208L288.665 131.852L290.043 124.997C290.186 124.248 290.125 123.662 289.859 123.236C289.598 122.812 289.114 122.529 288.406 122.387C287.831 122.271 287.296 122.323 286.801 122.542C286.305 122.761 285.886 123.095 285.543 123.545L284.06 130.926L282.289 130.57L284.37 120.211L286.046 120.548Z" fill="white" />
        <path d="M294.253 127.443C294.517 125.844 295.108 124.622 296.026 123.777C296.945 122.926 298.018 122.602 299.245 122.804C300.466 123.006 301.364 123.583 301.939 124.536L302.836 119.102L304.619 119.396L302.174 134.195L300.536 133.925L300.634 132.793C299.777 133.549 298.712 133.822 297.441 133.612C296.233 133.412 295.329 132.755 294.728 131.639C294.133 130.525 293.967 129.171 294.23 127.578L294.253 127.443ZM296.002 127.94C295.807 129.122 295.898 130.087 296.276 130.836C296.654 131.585 297.273 132.03 298.134 132.172C299.264 132.359 300.173 131.988 300.861 131.059L301.652 126.27C301.281 125.199 300.544 124.573 299.439 124.39C298.565 124.246 297.829 124.471 297.229 125.064C296.629 125.658 296.22 126.617 296.002 127.94Z" fill="white" />
        <path d="M312.774 130.2C312.884 129.17 313.184 128.266 313.673 127.487C314.168 126.708 314.799 126.134 315.566 125.764C316.338 125.395 317.187 125.259 318.113 125.358C319.544 125.511 320.647 126.129 321.421 127.214C322.202 128.299 322.505 129.664 322.33 131.308L322.316 131.434C322.207 132.457 321.912 133.355 321.43 134.129C320.955 134.897 320.327 135.468 319.548 135.843C318.774 136.219 317.915 136.356 316.97 136.255C315.546 136.103 314.443 135.485 313.662 134.4C312.887 133.315 312.587 131.957 312.761 130.326L312.774 130.2ZM314.558 130.606C314.433 131.771 314.602 132.736 315.064 133.499C315.533 134.262 316.22 134.692 317.126 134.789C318.039 134.887 318.802 134.608 319.415 133.953C320.029 133.292 320.405 132.317 320.543 131.029C320.666 129.877 320.49 128.915 320.016 128.144C319.549 127.368 318.862 126.931 317.956 126.834C317.069 126.739 316.316 127.016 315.697 127.664C315.078 128.311 314.698 129.292 314.558 130.606Z" fill="white" />
        <path d="M328.278 126.444L328.249 127.773C329.122 126.813 330.207 126.375 331.507 126.461C333.735 126.608 334.776 127.939 334.63 130.454L334.171 137.421L332.369 137.303L332.828 130.326C332.871 129.565 332.733 128.992 332.413 128.605C332.099 128.219 331.581 128.002 330.86 127.955C330.276 127.916 329.752 128.039 329.29 128.321C328.828 128.604 328.456 128.991 328.176 129.481L327.681 136.994L325.879 136.875L326.573 126.332L328.278 126.444Z" fill="white" />
        <path d="M349.891 137.743L348.075 137.733L348.139 125.692L344.489 127.011L344.498 125.37L349.684 123.455L349.967 123.456L349.891 137.743Z" fill="white" />
        <path d="M363.617 124.202L358.167 137.592L356.274 137.655L361.719 124.733L354.028 124.988L353.979 123.504L363.583 123.186L363.617 124.202Z" fill="white" />
        <path d="M380.428 136.106C380.304 135.908 380.186 135.547 380.071 135.021C379.316 135.968 378.358 136.496 377.198 136.604C376.161 136.701 375.281 136.489 374.559 135.968C373.843 135.44 373.443 134.725 373.358 133.824C373.256 132.729 373.592 131.841 374.365 131.16C375.144 130.473 376.289 130.059 377.799 129.917L379.55 129.754L379.472 128.927C379.414 128.299 379.179 127.817 378.769 127.483C378.357 127.142 377.786 127.006 377.053 127.074C376.411 127.134 375.889 127.346 375.485 127.711C375.081 128.076 374.9 128.488 374.943 128.948L373.135 129.117C373.085 128.592 373.223 128.07 373.547 127.549C373.877 127.021 374.346 126.585 374.955 126.24C375.57 125.895 376.26 125.687 377.025 125.615C378.237 125.502 379.215 125.718 379.959 126.263C380.703 126.802 381.137 127.601 381.262 128.662L381.715 133.504C381.805 134.47 382 135.227 382.299 135.774L382.314 135.93L380.428 136.106ZM377.314 135.014C377.878 134.961 378.4 134.765 378.878 134.426C379.356 134.088 379.687 133.674 379.87 133.186L379.669 131.028L378.259 131.159C376.055 131.365 375.013 132.113 375.134 133.403C375.186 133.967 375.416 134.39 375.821 134.673C376.227 134.955 376.725 135.069 377.314 135.014Z" fill="white" />
        <path d="M386.007 124.816L386.238 126.125C386.906 125.013 387.886 124.373 389.177 124.204C391.392 123.914 392.672 125.016 393.019 127.512L393.925 134.435L392.134 134.67L391.226 127.737C391.121 126.983 390.873 126.447 390.484 126.13C390.101 125.813 389.551 125.701 388.834 125.795C388.253 125.871 387.764 126.093 387.365 126.46C386.967 126.827 386.678 127.279 386.499 127.815L387.477 135.28L385.685 135.515L384.313 125.038L386.007 124.816Z" fill="white" />
        <path d="M395.559 128.743C395.291 127.145 395.454 125.797 396.049 124.7C396.643 123.597 397.553 122.943 398.779 122.737C399.999 122.532 401.036 122.787 401.888 123.502L400.976 118.07L402.758 117.771L405.242 132.564L403.604 132.839L403.33 131.736C402.764 132.729 401.845 133.332 400.574 133.546C399.367 133.748 398.299 133.42 397.369 132.559C396.445 131.697 395.849 130.47 395.582 128.878L395.559 128.743ZM397.375 128.646C397.573 129.828 397.973 130.711 398.573 131.297C399.173 131.883 399.903 132.104 400.763 131.959C401.893 131.77 402.633 131.124 402.983 130.022L402.179 125.236C401.482 124.343 400.581 123.989 399.476 124.174C398.603 124.321 397.979 124.772 397.604 125.528C397.229 126.284 397.153 127.324 397.375 128.646Z" fill="white" />
        <path d="M414.69 119.891L415.001 121.022C415.551 119.96 416.467 119.281 417.749 118.986C419.189 118.654 420.296 118.981 421.071 119.965C421.299 119.391 421.651 118.889 422.127 118.459C422.609 118.027 423.224 117.725 423.973 117.553C426.231 117.033 427.655 117.964 428.244 120.347L429.833 127.247L428.072 127.652L426.507 120.857C426.338 120.121 426.043 119.611 425.624 119.327C425.203 119.037 424.596 118.983 423.803 119.165C423.149 119.316 422.652 119.637 422.311 120.13C421.969 120.616 421.839 121.198 421.921 121.873L423.495 128.706L421.724 129.114L420.171 122.367C419.826 120.869 418.921 120.289 417.455 120.627C416.301 120.893 415.624 121.566 415.425 122.648L417.157 130.166L415.396 130.571L413.025 120.274L414.69 119.891Z" fill="white" />
        <path d="M438.599 123.722C438.138 124.705 437.251 125.375 435.938 125.733C434.852 126.03 433.937 125.942 433.194 125.47C432.456 124.989 431.915 124.132 431.571 122.896L429.762 116.263L431.505 115.788L433.301 122.373C433.723 123.919 434.562 124.52 435.818 124.177C437.149 123.814 437.9 123.076 438.069 121.964L436.046 114.549L437.789 114.074L440.57 124.268L438.911 124.72L438.599 123.722Z" fill="white" />
        <path d="M448.833 118.873C448.692 118.406 448.405 118.098 447.972 117.95C447.544 117.794 446.863 117.755 445.927 117.834C444.998 117.911 444.236 117.897 443.639 117.792C443.049 117.685 442.575 117.488 442.216 117.202C441.864 116.914 441.612 116.521 441.461 116.022C441.211 115.194 441.347 114.387 441.872 113.603C442.402 112.816 443.213 112.258 444.304 111.928C445.45 111.581 446.468 111.596 447.358 111.973C448.253 112.348 448.841 112.997 449.12 113.919L447.381 114.445C447.238 113.972 446.912 113.625 446.403 113.405C445.901 113.183 445.344 113.164 444.733 113.349C444.104 113.539 443.653 113.825 443.381 114.207C443.109 114.589 443.04 115.001 443.174 115.443C443.3 115.861 443.56 116.125 443.955 116.237C444.349 116.349 445.005 116.372 445.924 116.305C446.848 116.236 447.619 116.254 448.236 116.36C448.853 116.466 449.347 116.67 449.717 116.973C450.092 117.268 450.362 117.686 450.526 118.228C450.799 119.132 450.657 119.967 450.1 120.734C449.542 121.495 448.686 122.05 447.533 122.399C446.723 122.644 445.963 122.717 445.253 122.619C444.543 122.521 443.933 122.27 443.424 121.867C442.918 121.455 442.575 120.95 442.394 120.352L444.123 119.829C444.33 120.399 444.7 120.79 445.233 121.003C445.771 121.207 446.396 121.202 447.106 120.987C447.76 120.789 448.244 120.5 448.557 120.119C448.875 119.731 448.967 119.315 448.833 118.873Z" fill="white" />
        <path d="M452.709 106.802L453.502 109.235L455.378 108.623L455.811 109.951L453.935 110.563L455.967 116.792C456.098 117.195 456.281 117.471 456.514 117.621C456.746 117.764 457.063 117.77 457.465 117.639C457.663 117.575 457.924 117.449 458.246 117.261L458.7 118.654C458.289 118.925 457.869 119.13 457.442 119.27C456.675 119.52 456.02 119.476 455.479 119.139C454.938 118.802 454.528 118.207 454.249 117.353L452.218 111.123L450.389 111.719L449.956 110.392L451.785 109.795L450.991 107.363L452.709 106.802Z" fill="white" />
        <path d="M465.031 110.829C464.481 109.304 464.4 107.949 464.789 106.763C465.175 105.572 465.953 104.765 467.123 104.343C468.286 103.923 469.352 103.988 470.319 104.539L468.448 99.358L470.148 98.7445L475.241 112.853L473.68 113.417L473.212 112.381C472.833 113.459 472.038 114.217 470.825 114.655C469.674 115.071 468.564 114.939 467.494 114.259C466.431 113.576 465.626 112.476 465.078 110.957L465.031 110.829ZM466.8 110.408C467.207 111.535 467.758 112.333 468.453 112.802C469.148 113.27 469.906 113.357 470.727 113.061C471.805 112.671 472.417 111.904 472.564 110.757L470.916 106.192C470.069 105.438 469.119 105.252 468.066 105.632C467.233 105.933 466.7 106.489 466.467 107.3C466.234 108.111 466.345 109.147 466.8 110.408Z" fill="white" />
        <path d="M479.905 101.501C479.633 101.556 479.348 101.641 479.05 101.755C477.944 102.178 477.373 102.936 477.338 104.03L480.016 111.035L478.329 111.681L474.555 101.811L476.197 101.183L476.661 102.313C476.877 101.22 477.493 100.479 478.508 100.09C478.837 99.9649 479.102 99.9121 479.305 99.9322L479.905 101.501Z" fill="white" />
        <path d="M482.713 104.242C482.328 103.281 482.17 102.341 482.237 101.424C482.31 100.504 482.599 99.7008 483.103 99.0151C483.613 98.327 484.3 97.8099 485.164 97.4638C486.5 96.9289 487.764 96.9592 488.956 97.5547C490.154 98.1478 491.061 99.2119 491.676 100.747L491.723 100.865C492.105 101.82 492.265 102.752 492.201 103.661C492.141 104.562 491.854 105.36 491.341 106.057C490.833 106.751 490.138 107.275 489.256 107.628C487.926 108.161 486.662 108.13 485.464 107.537C484.272 106.942 483.37 105.882 482.76 104.359L482.713 104.242ZM484.479 103.766C484.915 104.854 485.516 105.627 486.281 106.084C487.053 106.54 487.861 106.598 488.708 106.259C489.56 105.918 490.103 105.315 490.339 104.449C490.572 103.577 490.447 102.54 489.966 101.337C489.535 100.261 488.93 99.4939 488.15 99.0348C487.373 98.5673 486.562 98.5029 485.716 98.8418C484.888 99.1734 484.352 99.7702 484.108 100.632C483.864 101.494 483.988 102.539 484.479 103.766Z" fill="white" />
        <path d="M504.641 98.3053L503.343 90.0795L505.005 89.371L506.319 100.297L504.971 100.872L499.468 94.5127L500.309 102.859L498.961 103.434L491.997 94.9165L493.65 94.2119L498.665 100.673L497.827 92.431L499.165 91.8604L504.641 98.3053Z" fill="white" />
        <path d="M512.95 82.9517L514.012 85.2794L515.807 84.4606L516.386 85.7311L514.592 86.5499L517.312 92.5115C517.487 92.8965 517.7 93.1502 517.949 93.2727C518.195 93.3893 518.511 93.3598 518.896 93.1841C519.085 93.0977 519.33 92.9432 519.629 92.7208L520.237 94.0535C519.859 94.3692 519.465 94.6203 519.056 94.8068C518.322 95.1419 517.667 95.1724 517.091 94.8985C516.515 94.6245 516.041 94.0788 515.668 93.2614L512.948 87.2998L511.198 88.0984L510.618 86.8279L512.368 86.0293L511.306 83.7016L512.95 82.9517Z" fill="white" />
        <path d="M521.336 87.6234C520.895 86.6869 520.681 85.7587 520.694 84.8387C520.713 83.9159 520.953 83.0974 521.415 82.383C521.884 81.6659 522.539 81.1089 523.381 80.7121C524.683 80.099 525.946 80.0542 527.172 80.578C528.403 81.099 529.371 82.1075 530.076 83.6034L530.13 83.7183C530.568 84.6488 530.783 85.5697 530.773 86.4811C530.766 87.3838 530.528 88.198 530.056 88.9238C529.591 89.6468 528.928 90.2109 528.068 90.616C526.773 91.2264 525.509 91.2711 524.278 90.7501C523.052 90.2264 522.09 89.2224 521.391 87.7382L521.336 87.6234ZM523.071 87.0436C523.571 88.1037 524.216 88.8396 525.007 89.2513C525.804 89.6602 526.615 89.6704 527.44 89.282C528.27 88.8908 528.777 88.2561 528.961 87.3779C529.142 86.4939 528.956 85.4659 528.404 84.2938C527.91 83.2455 527.26 82.5153 526.454 82.1033C525.652 81.6826 524.838 81.6665 524.014 82.055C523.207 82.4351 522.707 83.0627 522.515 83.9377C522.323 84.8127 522.508 85.848 523.071 87.0436Z" fill="white" />
        <path d="M545.044 82.1615L543.417 82.9677L538.072 72.1776L535.402 74.9932L534.674 73.523L538.449 69.4844L538.703 69.3587L545.044 82.1615Z" fill="white" />
        <path d="M549.86 63.7857L550.557 65.1517L550.261 65.3025C549.02 65.9642 548.211 66.8439 547.835 67.9416C547.459 69.0392 547.546 70.2702 548.095 71.6345C548.372 70.5288 549.087 69.6819 550.242 69.0936C551.344 68.5319 552.421 68.4727 553.472 68.9159C554.53 69.3562 555.372 70.1912 555.998 71.4209C556.664 72.7261 556.839 73.952 556.525 75.0986C556.216 76.2424 555.464 77.1187 554.269 77.7277C553.057 78.3455 551.837 78.3826 550.61 77.8388C549.38 77.2892 548.391 76.2806 547.643 74.8131L547.329 74.1953C546.14 71.8635 545.729 69.8299 546.094 68.0947C546.462 66.3507 547.622 64.9632 549.573 63.932L549.86 63.7857ZM550.655 70.571C550.104 70.8518 549.681 71.2758 549.385 71.8429C549.089 72.4101 548.979 72.9889 549.053 73.5793L549.355 74.171C549.887 75.2151 550.551 75.9365 551.346 76.3351C552.141 76.7337 552.889 76.7542 553.591 76.3965C554.316 76.0269 554.748 75.4704 554.888 74.7269C555.034 73.9804 554.887 73.175 554.446 72.3107C554.003 71.4406 553.433 70.8466 552.738 70.5288C552.045 70.2022 551.351 70.2162 550.655 70.571Z" fill="white" />
      </g>
    </svg>

  );
}
