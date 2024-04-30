/* eslint-disable max-len */
interface FilledFavoriteProps {
  width?: number
  height?: number
}

function FilledFavorite({ width = 21, height = 19 }: FilledFavoriteProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="youtube_sol">
        <g id="Subtract">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.9438 6.05395C21.2534 6.37318 21.4733 6.76846 21.5813 7.19989C21.8697 8.79862 22.0097 10.4206 21.9995 12.0451C22.0052 13.6453 21.8653 15.2427 21.5813 16.8176C21.4733 17.249 21.2534 17.6443 20.9438 17.9635C20.6341 18.2827 20.2457 18.5146 19.8178 18.6357C18.2542 19.0538 12 19.0538 12 19.0538C12 19.0538 5.74578 19.0538 4.18222 18.6357C3.76299 18.5209 3.38043 18.3 3.0715 17.9943C2.76258 17.6886 2.53773 17.3083 2.41868 16.8903C2.1303 15.2916 1.99032 13.6696 2.00052 12.0451C1.99255 10.4327 2.13253 8.82303 2.41868 7.23625C2.52666 6.80482 2.74659 6.40954 3.05623 6.09031C3.36588 5.77109 3.75429 5.53923 4.18222 5.41816C5.74578 5 12 5 12 5C12 5 18.2542 5 19.8178 5.3818C20.2457 5.50287 20.6341 5.73473 20.9438 6.05395ZM11.2349 8.3602L11.253 8.37182L15.2128 10.9174L15.2129 10.9175C15.3724 11.02 15.5195 11.1146 15.6324 11.2026C15.7494 11.2938 15.8888 11.4216 15.9687 11.6108C16.0739 11.8596 16.0739 12.1404 15.9687 12.3892C15.8888 12.5785 15.7494 12.7062 15.6324 12.7975C15.5195 12.8855 15.3724 12.9801 15.2129 13.0826L15.2129 13.0826L15.2129 13.0826L11.2349 15.6399L11.2349 15.6399C11.0497 15.7589 10.8827 15.8663 10.741 15.94C10.5986 16.0141 10.4043 16.0978 10.1788 16.0816C9.88943 16.061 9.62333 15.9157 9.44949 15.6835C9.314 15.5025 9.27922 15.2938 9.26456 15.1339C9.24997 14.9749 9.24999 14.7764 9.25 14.5562V14.5562L9.25 9.46535L9.25 9.44386V9.44382C9.24999 9.22368 9.24997 9.02517 9.26456 8.8661C9.27922 8.70623 9.314 8.49751 9.44949 8.31654C9.62333 8.08434 9.88943 7.93906 10.1788 7.91839C10.4043 7.90229 10.5986 7.98589 10.741 8.06002C10.8827 8.13377 11.0497 8.24113 11.2349 8.3602Z"
            fill="#0075FF"
          />
          <path
            d="M21.5813 7.19989L22.0734 7.11113C22.0714 7.10017 22.0691 7.08928 22.0664 7.07848L21.5813 7.19989ZM20.9438 6.05395L21.3027 5.70582L21.3027 5.70582L20.9438 6.05395ZM21.9995 12.0451L21.4995 12.0419L21.4995 12.0469L21.9995 12.0451ZM21.5813 16.8176L22.0664 16.939C22.0691 16.9282 22.0714 16.9173 22.0734 16.9063L21.5813 16.8176ZM19.8178 18.6357L19.947 19.1187L19.9539 19.1168L19.8178 18.6357ZM12 19.0538L12 18.5538L12 18.5538L12 19.0538ZM4.18222 18.6357L4.05026 19.1179L4.05304 19.1187L4.18222 18.6357ZM3.0715 17.9943L2.71979 18.3497L2.71979 18.3497L3.0715 17.9943ZM2.41868 16.8903L1.92662 16.979C1.92955 16.9953 1.93328 17.0114 1.9378 17.0272L2.41868 16.8903ZM2.00052 12.0451L2.50054 12.0482L2.50051 12.0426L2.00052 12.0451ZM2.41868 7.23625L1.93364 7.11484C1.93094 7.12565 1.92859 7.13655 1.92662 7.14751L2.41868 7.23625ZM3.05623 6.09031L2.69734 5.74218L2.69734 5.74218L3.05623 6.09031ZM4.18222 5.41816L4.05303 4.93509L4.04611 4.93704L4.18222 5.41816ZM19.8178 5.3818L19.9539 4.90068C19.9481 4.89904 19.9422 4.8975 19.9364 4.89607L19.8178 5.3818ZM11.253 8.37182L10.9826 8.7924L10.9826 8.79241L11.253 8.37182ZM11.2349 8.3602L10.9645 8.78077L10.9645 8.78078L11.2349 8.3602ZM15.2128 10.9174L15.4961 10.5054C15.4919 10.5025 15.4876 10.4996 15.4832 10.4969L15.2128 10.9174ZM15.2129 10.9175L14.9296 11.3295C14.9339 11.3324 14.9382 11.3353 14.9425 11.3381L15.2129 10.9175ZM15.6324 11.2026L15.9398 10.8083L15.9398 10.8083L15.6324 11.2026ZM15.9687 11.6108L15.5082 11.8054L15.5082 11.8054L15.9687 11.6108ZM15.9687 12.3892L16.4293 12.5838L16.4293 12.5838L15.9687 12.3892ZM15.6324 12.7975L15.3249 12.4032L15.3249 12.4032L15.6324 12.7975ZM15.2129 13.0826L15.475 13.5085L15.4833 13.5032L15.2129 13.0826ZM15.2129 13.0826L15.4736 13.5092L15.4749 13.5084L15.2129 13.0826ZM15.2129 13.0826L14.9521 12.6558L14.9425 12.662L15.2129 13.0826ZM11.2349 15.6399L11.483 16.074C11.4905 16.0697 11.4979 16.0652 11.5053 16.0605L11.2349 15.6399ZM11.2349 15.6399L10.9868 15.2057C10.9792 15.2101 10.9718 15.2146 10.9645 15.2193L11.2349 15.6399ZM10.741 15.94L10.5102 15.4965L10.5102 15.4965L10.741 15.94ZM10.1788 16.0816L10.1431 16.5804L10.1431 16.5804L10.1788 16.0816ZM9.44949 15.6835L9.84974 15.3838L9.84974 15.3838L9.44949 15.6835ZM9.26456 15.1339L8.76665 15.1796L8.76665 15.1796L9.26456 15.1339ZM9.25 14.5562L9.75 14.5563V14.5562H9.25ZM9.25 14.5562L8.75 14.5562V14.5562H9.25ZM9.25 9.46535L9.75 9.46535L9.75 9.46531L9.25 9.46535ZM9.25 9.44386L8.75 9.44386L8.75 9.44391L9.25 9.44386ZM9.25 9.44382L9.75 9.44382L9.75 9.44379L9.25 9.44382ZM9.26456 8.8661L8.76665 8.82045L8.76665 8.82045L9.26456 8.8661ZM9.44949 8.31654L9.04923 8.01689L9.04923 8.01689L9.44949 8.31654ZM10.1788 7.91839L10.1431 7.41967L10.1431 7.41967L10.1788 7.91839ZM10.741 8.06002L10.5102 8.50353L10.5102 8.50354L10.741 8.06002ZM22.0664 7.07848C21.937 6.5617 21.6736 6.08821 21.3027 5.70582L20.5849 6.40208C20.8333 6.65815 21.0097 6.97522 21.0963 7.32129L22.0664 7.07848ZM22.4995 12.0482C22.5099 10.3929 22.3672 8.74018 22.0734 7.11113L21.0893 7.28864C21.3722 8.85705 21.5095 10.4483 21.4995 12.0419L22.4995 12.0482ZM22.0734 16.9063C22.3627 15.3016 22.5053 13.6739 22.4995 12.0433L21.4995 12.0469C21.5051 13.6168 21.3678 15.1839 21.0893 16.7288L22.0734 16.9063ZM21.3027 18.3116C21.6736 17.9292 21.937 17.4558 22.0664 16.939L21.0963 16.6962C21.0097 17.0422 20.8333 17.3593 20.5849 17.6154L21.3027 18.3116ZM19.9539 19.1168C20.4665 18.9717 20.9318 18.694 21.3027 18.3116L20.5849 17.6154C20.3365 17.8714 20.0249 18.0574 19.6817 18.1545L19.9539 19.1168ZM12 19.0538C12 19.5538 12 19.5538 12.0001 19.5538C12.0002 19.5538 12.0002 19.5538 12.0004 19.5538C12.0006 19.5538 12.0009 19.5538 12.0013 19.5538C12.0021 19.5538 12.0033 19.5538 12.0048 19.5538C12.0079 19.5538 12.0125 19.5538 12.0185 19.5538C12.0306 19.5538 12.0484 19.5538 12.0717 19.5537C12.1183 19.5536 12.1867 19.5534 12.2741 19.553C12.4491 19.5522 12.7005 19.5505 13.007 19.5473C13.6198 19.5407 14.4538 19.5276 15.3374 19.5013C16.2202 19.4751 17.1566 19.4356 17.973 19.3761C18.7754 19.3176 19.5042 19.2371 19.947 19.1187L19.6886 18.1526C19.3495 18.2433 18.7102 18.3196 17.9003 18.3787C17.1042 18.4368 16.1839 18.4757 15.3077 18.5018C14.4323 18.5278 13.605 18.5408 12.9963 18.5473C12.6921 18.5506 12.4426 18.5522 12.2694 18.553C12.1828 18.5534 12.1153 18.5536 12.0695 18.5537C12.0466 18.5538 12.0291 18.5538 12.0175 18.5538C12.0116 18.5538 12.0072 18.5538 12.0043 18.5538C12.0028 18.5538 12.0017 18.5538 12.001 18.5538C12.0007 18.5538 12.0004 18.5538 12.0002 18.5538C12.0001 18.5538 12.0001 18.5538 12 18.5538C12 18.5538 12 18.5538 12 19.0538ZM4.05304 19.1187C4.49576 19.2371 5.22458 19.3176 6.027 19.3761C6.84341 19.4356 7.77978 19.4751 8.66259 19.5013C9.54621 19.5276 10.3802 19.5407 10.993 19.5473C11.2995 19.5505 11.5509 19.5522 11.7259 19.553C11.8133 19.5534 11.8817 19.5536 11.9283 19.5537C11.9516 19.5538 11.9694 19.5538 11.9815 19.5538C11.9875 19.5538 11.9921 19.5538 11.9952 19.5538C11.9967 19.5538 11.9979 19.5538 11.9987 19.5538C11.9991 19.5538 11.9994 19.5538 11.9996 19.5538C11.9998 19.5538 11.9998 19.5538 11.9999 19.5538C12 19.5538 12 19.5538 12 19.0538C12 18.5538 12 18.5538 12 18.5538C11.9999 18.5538 11.9999 18.5538 11.9998 18.5538C11.9996 18.5538 11.9993 18.5538 11.999 18.5538C11.9983 18.5538 11.9972 18.5538 11.9957 18.5538C11.9928 18.5538 11.9884 18.5538 11.9825 18.5538C11.9709 18.5538 11.9534 18.5538 11.9305 18.5537C11.8847 18.5536 11.8172 18.5534 11.7306 18.553C11.5574 18.5522 11.308 18.5506 11.0037 18.5473C10.395 18.5408 9.56768 18.5278 8.6923 18.5018C7.81611 18.4757 6.89576 18.4368 6.09975 18.3787C5.28976 18.3196 4.65047 18.2433 4.31141 18.1526L4.05304 19.1187ZM2.71979 18.3497C3.08984 18.7159 3.54809 18.9805 4.05027 19.1179L4.31418 18.1534C3.9779 18.0614 3.67103 17.8842 3.42322 17.6389L2.71979 18.3497ZM1.9378 17.0272C2.0804 17.528 2.34974 17.9835 2.71979 18.3497L3.42322 17.6389C3.17542 17.3937 2.99505 17.0887 2.89956 16.7533L1.9378 17.0272ZM1.50053 12.0419C1.49014 13.6973 1.63277 15.35 1.92662 16.979L2.91074 16.8015C2.62783 15.2331 2.4905 13.6419 2.50051 12.0482L1.50053 12.0419ZM1.92662 7.14751C1.63504 8.76439 1.49241 10.4046 1.50053 12.0476L2.50051 12.0426C2.4927 10.4608 2.63002 8.88167 2.91074 7.32498L1.92662 7.14751ZM2.69734 5.74218C2.32643 6.12457 2.06299 6.59806 1.93364 7.11484L2.90372 7.35765C2.99034 7.01159 3.16675 6.69451 3.41513 6.43844L2.69734 5.74218ZM4.04611 4.93704C3.53351 5.08207 3.06825 5.3598 2.69734 5.74218L3.41513 6.43844C3.66351 6.18238 3.97507 5.99639 4.31834 5.89928L4.04611 4.93704ZM12 5C12 4.5 12 4.5 11.9999 4.5C11.9998 4.5 11.9998 4.5 11.9996 4.5C11.9994 4.5 11.9991 4.5 11.9987 4.5C11.9979 4.5 11.9967 4.5 11.9952 4.5C11.9921 4.5 11.9875 4.50001 11.9815 4.50001C11.9694 4.50003 11.9516 4.50005 11.9283 4.5001C11.8817 4.50021 11.8133 4.50041 11.7259 4.50082C11.5509 4.50164 11.2995 4.50328 10.993 4.50656C10.3802 4.51312 9.54621 4.52623 8.66259 4.55249C7.77978 4.57872 6.84341 4.61819 6.027 4.67774C5.22458 4.73626 4.49576 4.81674 4.05304 4.93514L4.31141 5.90118C4.65047 5.8105 5.28976 5.73417 6.09975 5.67509C6.89576 5.61703 7.81611 5.57809 8.6923 5.55205C9.56768 5.52604 10.395 5.51302 11.0037 5.50651C11.308 5.50325 11.5574 5.50162 11.7306 5.50081C11.8172 5.5004 11.8847 5.5002 11.9305 5.5001C11.9534 5.50005 11.9709 5.50003 11.9825 5.50001C11.9884 5.50001 11.9928 5.5 11.9957 5.5C11.9972 5.5 11.9983 5.5 11.999 5.5C11.9993 5.5 11.9996 5.5 11.9998 5.5C11.9999 5.5 11.9999 5.5 12 5.5C12 5.5 12 5.5 12 5ZM19.9364 4.89607C19.4976 4.78893 18.7724 4.71563 17.9698 4.66218C17.1543 4.60787 16.2186 4.57185 15.3361 4.54791C14.4529 4.52394 13.6192 4.51197 13.0065 4.50599C12.7001 4.503 12.4488 4.5015 12.2739 4.50075C12.1865 4.50038 12.1182 4.50019 12.0716 4.50009C12.0484 4.50005 12.0305 4.50002 12.0185 4.50001C12.0125 4.50001 12.0079 4.5 12.0048 4.5C12.0032 4.5 12.0021 4.5 12.0013 4.5C12.0009 4.5 12.0006 4.5 12.0003 4.5C12.0002 4.5 12.0002 4.5 12.0001 4.5C12 4.5 12 4.5 12 5C12 5.5 12 5.5 12 5.5C12.0001 5.5 12.0001 5.5 12.0002 5.5C12.0004 5.5 12.0007 5.5 12.001 5.5C12.0017 5.5 12.0028 5.5 12.0043 5.5C12.0072 5.5 12.0116 5.50001 12.0175 5.50001C12.0292 5.50002 12.0467 5.50005 12.0696 5.50009C12.1154 5.50018 12.183 5.50037 12.2696 5.50074C12.4429 5.50148 12.6924 5.50297 12.9968 5.50594C13.6057 5.51189 14.4333 5.52378 15.309 5.54754C16.1855 5.57132 17.1065 5.6069 17.9034 5.65997C18.7132 5.7139 19.3561 5.78376 19.6992 5.86753L19.9364 4.89607ZM21.3027 5.70582C20.9318 5.32344 20.4665 5.04571 19.9539 4.90068L19.6817 5.86291C20.0249 5.96003 20.3365 6.14601 20.5849 6.40208L21.3027 5.70582ZM11.5234 7.95124L11.5053 7.93961L10.9645 8.78078L10.9826 8.7924L11.5234 7.95124ZM15.4832 10.4969L11.5234 7.95123L10.9826 8.79241L14.9425 11.338L15.4832 10.4969ZM15.4961 10.5054L15.4961 10.5054L14.9296 11.3295L14.9296 11.3295L15.4961 10.5054ZM15.9398 10.8083C15.8051 10.7032 15.6363 10.5953 15.4832 10.4968L14.9425 11.3381C15.1084 11.4447 15.2339 11.5259 15.3249 11.5968L15.9398 10.8083ZM16.4293 11.4162C16.2996 11.1092 16.0797 10.9174 15.9398 10.8083L15.3249 11.5968C15.4191 11.6703 15.478 11.7339 15.5082 11.8054L16.4293 11.4162ZM16.4293 12.5838C16.587 12.2106 16.587 11.7894 16.4293 11.4162L15.5082 11.8054C15.5607 11.9298 15.5607 12.0702 15.5082 12.1946L16.4293 12.5838ZM15.9398 13.1918C16.0797 13.0827 16.2996 12.8908 16.4293 12.5838L15.5082 12.1946C15.478 12.2661 15.4191 12.3297 15.3249 12.4032L15.9398 13.1918ZM15.4833 13.5032C15.6363 13.4048 15.8052 13.2968 15.9398 13.1918L15.3249 12.4032C15.2339 12.4742 15.1084 12.5553 14.9426 12.662L15.4833 13.5032ZM15.4749 13.5084L15.475 13.5084L14.9509 12.6567L14.9508 12.6568L15.4749 13.5084ZM15.4736 13.5092L15.4736 13.5092L14.9521 12.6559L14.9521 12.656L15.4736 13.5092ZM11.5053 16.0605L15.4832 13.5032L14.9425 12.662L10.9645 15.2193L11.5053 16.0605ZM11.4829 16.074L11.483 16.074L10.9868 15.2057L10.9868 15.2057L11.4829 16.074ZM10.9719 16.3835C11.1384 16.2969 11.3269 16.1752 11.5053 16.0604L10.9645 15.2193C10.7726 15.3427 10.6271 15.4357 10.5102 15.4965L10.9719 16.3835ZM10.1431 16.5804C10.5107 16.6066 10.8075 16.4691 10.9719 16.3835L10.5102 15.4965C10.3898 15.5592 10.2978 15.5889 10.2144 15.5829L10.1431 16.5804ZM9.04923 15.9832C9.30999 16.3315 9.70914 16.5494 10.1431 16.5804L10.2144 15.5829C10.0697 15.5726 9.93667 15.4999 9.84974 15.3838L9.04923 15.9832ZM8.76665 15.1796C8.78357 15.3642 8.82839 15.6882 9.04923 15.9832L9.84974 15.3838C9.79962 15.3169 9.77487 15.2235 9.76247 15.0883L8.76665 15.1796ZM8.75 14.5562C8.74999 14.7683 8.74951 14.9927 8.76665 15.1796L9.76247 15.0883C9.75044 14.957 9.74999 14.7844 9.75 14.5563L8.75 14.5562ZM8.75 14.5562V14.5562H9.75V14.5562H8.75ZM8.75 9.46535L8.75 14.5562L9.75 14.5562L9.75 9.46535L8.75 9.46535ZM8.75 9.44391L8.75 9.4654L9.75 9.46531L9.75 9.44382L8.75 9.44391ZM8.75 9.44382V9.44386H9.75V9.44382H8.75ZM8.76665 8.82045C8.74951 9.00734 8.74999 9.23174 8.75 9.44385L9.75 9.44379C9.74999 9.21563 9.75044 9.043 9.76247 8.91175L8.76665 8.82045ZM9.04923 8.01689C8.82839 8.31187 8.78357 8.63589 8.76665 8.82045L9.76247 8.91176C9.77487 8.77656 9.79962 8.68315 9.84974 8.6162L9.04923 8.01689ZM10.1431 7.41967C9.70914 7.45066 9.30999 7.66858 9.04923 8.01689L9.84974 8.6162C9.93667 8.5001 10.0697 8.42746 10.2144 8.41712L10.1431 7.41967ZM10.9719 7.6165C10.8075 7.53093 10.5107 7.39341 10.1431 7.41967L10.2144 8.41712C10.2978 8.41117 10.3898 8.44086 10.5102 8.50353L10.9719 7.6165ZM11.5053 7.93962C11.3269 7.8249 11.1384 7.70315 10.9719 7.61649L10.5102 8.50354C10.6271 8.56439 10.7726 8.65736 10.9645 8.78077L11.5053 7.93962Z"
            fill="#0075FF"
          />
        </g>
      </g>
    </svg>
  );
}

export default FilledFavorite;
