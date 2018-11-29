<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Inmail extends CI_Controller {

	function __construct()
    {
        parent::__construct();
        $this->load->model('inmailModel', 'inmail', TRUE);
		$this->load->helper('url');
    }

	public function get_inmail($id){
		$contatos = $this->inmail->get_inmail($id);
		$response = array();
		foreach($contatos as $res){
			$user = array();
			$user["id"] = $res->id;
			$user["name"] = $res->name;
			$user["email"] = $res->email;
			$user["contact_second_id"] = $res->contact_second_id;
			$user["photo"] = $res->photo;
			$user["message"] = $res->message;
			array_push($response, $user);
		}
		echo json_encode($response);
	}

	public function get_inmail_enviados($id){
		$contatos = $this->inmail->get_inmail_enviados($id);
		$response = array();
		foreach($contatos as $res){
			$user = array();
			$user["id"] = $res->id;
			$user["name"] = $res->name;
			$user["email"] = $res->email;
			$user["contact_first_id"] = $res->contact_first_id;
			$user["photo"] = $res->photo;
			$user["message"] = $res->message;
			array_push($response, $user);
		}
		echo json_encode($response);
	}

	public function cadastrar_inmail($token){

        $msg = "";
        $request = array();
        $json = file_get_contents('php://input');
        $request = json_decode($json, true);
        $message = "";
        $sender_id = "";
        $receiver_id = $token;
        $status_sender = "";
        $status_receiver = "";
        $id = "";

        if(!empty($request))
        {
            foreach ($request as $key => $val) 
            {
                if($key == "id"){
                    $id = $val;
                }else if($key == "message"){
                    $message = $val;
                }else if($key == "sender_id"){
                    $sender_id = $val;
                }else if($key == "status_sender"){
                    $status_sender = $val;
                }else if($key == "status_receiver"){
                    $status_receiver = $val;
                } else {
                    $msg = "valor enviado invalido";
                }
            }

            $dados = array(
                    'message' => $message,
                    'sender_id' => $sender_id,
                    'receiver_id' => $receiver_id,
                    'status_sender' => '1',
                    'status_receiver' => '1',
            );

            if($this->db->insert('ls_user_message', $dados)){
                $insert_id = $this->db->insert_id();
                $msg = $insert_id."|sucesso";
            }else{
                $msg = "Ocorreu algum erro";
            }

        } else {
            $msg = "Erro ao enviar os dados !";
        }
        echo $msg;
    }

}