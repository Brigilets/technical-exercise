 export interface  ILaunch  {
    details:	string;
    id:	{};
    is_tentative:	boolean;
    launch_date_local:	{};
    launch_date_unix:	{};
    launch_date_utc:	{};
    launch_site: {
    site_id: string;
    site_name_long:	string;
    site_name:	string;
    };
    launch_success:	boolean;
    launch_year:	string;
    links:{
    article_link:	string;
    flickr_images:	string[];
    mission_patch_small:	string;
    mission_patch:	string;
    presskit:	string;
    reddit_campaign:	string;
    reddit_launc:	string;
    reddit_media:	string;
    reddit_recovery:	string;
    video_link:	string;
    wikipedia:	string;
    };
    mission_id:	string[];
    mission_name:	string;
    rocket:{
    fairings:	{
      recovered:	boolean;
      recovery_attempt:	boolean;
      reused:	boolean;
      ship:	string;
    };
    first_stage:{
      cores: [{
        block: number;
        core: {
          asds_attemps: number;
          asds_landings: number;
          block: number;
          id: {};
          missions:[{
            flight: number;
            name: string;
          }];
        }
      }]
    }
    rocket_name:	string;
    rocket_type:	string;
    rocket:	{};
    second_stage:	{};
    };
    static_fire_date_unix:	{};
    static_fire_date_utc:	{};
    telemetry:	{
    flight_club:	string;
    }
    tentative_max_precision:	string;
    upcoming:	boolean;
    ships:	[{
    abs:	number;
    active:	boolean;
    attempted_landings:	number;
    class: number;
    course_deg:	number;
    home_port:	string;
    id:	{};
    image:	string;
    imo: number;
    missions:	[];
    mmsi:number;
    model:	string;
    name:	string;
    position:	{}
    roles:	[]
    speed_kn:	number
    status:	string;
    successful_landings:	number;
    type:	string;
    url:	string;
    weight_kg:number;
    weight_lbs: number;
    year_built: number
    }]

 }