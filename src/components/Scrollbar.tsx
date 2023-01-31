// import { styled } from "@mui/material/styles";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material";
import React, { ReactElement, useEffect, useRef } from "react";
import { ScrollbarProps, Scrollbars } from "react-custom-scrollbars-2";
import Measure, { MeasuredComponentProps } from "react-measure";
import { useLocation } from "react-router-dom";
interface Props extends ScrollbarProps {
  children?: React.ReactNode;
  scrollRef?: any;
}
const StyledScrollbar = styled(Scrollbars)<ScrollbarProps>(({ theme }) => ({
  "&.rtlSide": {
    "& > div": {
      marginRight: -17,
      marginLeft: "0 !important",
    },
  },
}));
export default function Scrollbar({
  children,
  scrollRef,
  ...rest
}: Props): ReactElement {
  let dir: string = useTheme()?.direction;
  if (rest.dir) {
    dir = rest.dir;
  }
  const ref = useRef<any>();
  const location = useLocation();
  const rtl = dir;
  const trackRtlStyle = rtl ? { left: "-17px", right: "98.3%" } : {};
  useEffect(() => {
    setTimeout(() => {
      ref?.current?.forceUpdate();
      scrollRef?.current?.forceUpdate();
    }, 700);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, scrollRef?.current, ref?.current]);

  return (
    <StyledScrollbar
      className={`customscrollbar ${rest.className} ${
        dir === "rtl" ? "rtlSide" : ""
      }`}
      {...(dir === "rtl"
        ? {
            renderTrackVertical: (props) => (
              <div
                className="verticalTrack"
                {...props}
                style={{
                  ...props.style,
                  marginLeft: props.style.marginRight,
                  marginRight: 0,
                  bottom: 2,
                  top: 2,
                  borderRadius: 3,
                  left: 17,
                  ...trackRtlStyle,
                }}
              />
            ),
          }
        : {})}
      {...rest}
      ref={scrollRef || ref}
    >
      <Measure
        bounds
        onResize={() => {
          ref?.current?.forceUpdate();
          scrollRef?.current?.forceUpdate();
        }}
      >
        {({ measureRef }: MeasuredComponentProps) => (
          <div ref={measureRef} className="rc-scollbar">
            {children}
          </div>
        )}
      </Measure>
    </StyledScrollbar>
  );
}
