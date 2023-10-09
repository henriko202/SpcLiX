import { LaunchData } from "global"
import Image from "next/image"
import noImage from "public/images/no-image.jpg"
import React from "react"

const RocketCard = (props: LaunchData) => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl h-[420px] m-4">
        {props.links?.patch?.small && (
          <figure className="h-[208px]">
            <Image src={props.links?.patch?.small} alt="Rocket Patch" className="rounded-t-lg" width={384} height={208} priority />
          </figure>
        )}
        {!props.links?.patch?.small && (
          <figure className="h-[208px]">
            <Image src={noImage} alt="Rocket Patch" className="rounded-t-lg" width={384} height={208} priority />
          </figure>
        )}
        <div className="card-body">
          <h2 className="card-title">
            {props.name}
            {props.upcoming && <div className="badge badge-secondary">Upcoming!</div>}
          </h2>
          {
            <p>
              Watch the launch {props.upcoming ? "on" : "again"} {new Date(props.date_utc).toDateString()}
            </p>
          }
          {props.links?.webcast && (
            <a href={props.links?.webcast} className="btn btn-primary" target="_blank" rel="noreferrer">
              Watch now!
            </a>
          )}
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{props.flight_number}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RocketCard
